import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFolderSearchIcon],svg[tdesign-folder-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2.5h8.48l2 2.5H23v7.5h-2V7H10.52l-2-2.5H3V19h8.5v2H1zm16.25 12a2.75 2.75 0 0 1 1.946 4.693l-.008.008A2.75 2.75 0 1 1 17.25 14.5m3.992 5.325a4.75 4.75 0 1 0-1.414 1.415l1.67 1.674l1.416-1.412z"></svg:path>`,
})
export class TdesignFolderSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
