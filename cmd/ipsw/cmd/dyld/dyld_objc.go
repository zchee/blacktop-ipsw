/*
Copyright © 2018-2024 blacktop

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
package dyld

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/apex/log"
	"github.com/fatih/color"
	"github.com/pkg/errors"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"

	"github.com/blacktop/ipsw/pkg/dyld"
)

func init() {
	DyldCmd.AddCommand(ObjcCmd)
	ObjcCmd.Flags().BoolP("class", "c", false, "Print the classes")
	ObjcCmd.Flags().BoolP("sel", "s", false, "Print the selectors")
	ObjcCmd.Flags().BoolP("proto", "p", false, "Print the protocols")
	ObjcCmd.Flags().BoolP("imp-cache", "i", false, "Print the imp-caches")
}

// ObjcCmd represents the objc command
var ObjcCmd = &cobra.Command{
	Use:   "objc <DSC>",
	Short: "Dump Objective-C Optimization Info",
	Args:  cobra.ExactArgs(1),
	ValidArgsFunction: func(cmd *cobra.Command, args []string, toComplete string) ([]string, cobra.ShellCompDirective) {
		return getDSCs(toComplete), cobra.ShellCompDirectiveDefault
	},
	SilenceErrors: true,
	RunE: func(cmd *cobra.Command, args []string) error {

		if viper.GetBool("verbose") {
			log.SetLevel(log.DebugLevel)
		}
		color.NoColor = viper.GetBool("no-color")

		printClasses, _ := cmd.Flags().GetBool("class")
		printSelectors, _ := cmd.Flags().GetBool("sel")
		printProtocols, _ := cmd.Flags().GetBool("proto")
		printImpCaches, _ := cmd.Flags().GetBool("imp-cache")

		dscPath := filepath.Clean(args[0])

		fileInfo, err := os.Lstat(dscPath)
		if err != nil {
			return fmt.Errorf("file %s does not exist", dscPath)
		}

		// Check if file is a symlink
		if fileInfo.Mode()&os.ModeSymlink != 0 {
			symlinkPath, err := os.Readlink(dscPath)
			if err != nil {
				return errors.Wrapf(err, "failed to read symlink %s", dscPath)
			}
			// TODO: this seems like it would break
			linkParent := filepath.Dir(dscPath)
			linkRoot := filepath.Dir(linkParent)

			dscPath = filepath.Join(linkRoot, symlinkPath)
		}

		f, err := dyld.Open(dscPath)
		if err != nil {
			return err
		}
		defer f.Close()

		if printClasses {
			if _, err := f.GetAllObjCClasses(true); err != nil {
				return err
			}
		}

		if printSelectors {
			if _, err := f.GetAllObjCSelectors(true); err != nil {
				return err
			}
		}

		if printProtocols {
			if _, err := f.GetAllObjCProtocols(true); err != nil {
				return err
			}
		}

		if printImpCaches {
			if err = f.ImpCachesForImage(); err != nil {
				return err
			}
		}

		return nil
	},
}
