import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFolderDownloadIcon],svg[mdi-folder-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2zm-.75 7H16V9h-2v4h-3.25L15 17.25"></svg:path>`,
})
export class MdiFolderDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
