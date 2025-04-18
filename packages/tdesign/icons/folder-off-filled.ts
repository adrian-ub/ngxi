import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFolderOffFilledIcon],svg[tdesign-folder-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.58 21.75L20.994 2.336l1.414 1.414L21.158 5H23v16H5.159l-2.165 2.164zM11.48 5h4.03L1 19.51V2.5h8.48z"></svg:path>`,
})
export class TdesignFolderOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
