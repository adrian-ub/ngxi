import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonFolderCloseFillIcon],svg[iconamoon-folder-close-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 5a1 1 0 0 1 1-1h7a1 1 0 0 1 .707.293L12.414 6H21a1 1 0 0 1 1 1v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm8.707 5.293a1 1 0 0 0-1.414 1.414L10.586 13l-1.293 1.293a1 1 0 1 0 1.414 1.414L12 14.414l1.293 1.293a1 1 0 0 0 1.414-1.414L13.414 13l1.293-1.293a1 1 0 0 0-1.414-1.414L12 11.586z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonFolderCloseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
