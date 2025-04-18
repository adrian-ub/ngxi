import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFolderBlockedFilledIcon],svg[tdesign-folder-blocked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2.5h8.48l2 2.5H23v6.638A7 7 0 0 0 12.755 21H1z"></svg:path><svg:path fill="currentColor" d="M18.5 11.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M15 17a3.5 3.5 0 0 1 5.165-3.08l-4.744 4.745A3.5 3.5 0 0 1 15 17m1.835 3.08l4.744-4.745a3.5 3.5 0 0 1-4.745 4.745"></svg:path>`,
})
export class TdesignFolderBlockedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
