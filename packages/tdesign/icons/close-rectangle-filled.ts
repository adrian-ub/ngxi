import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCloseRectangleFilledIcon],svg[tdesign-close-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v20H2V2zm-5.757 7.172L14.83 7.757L12 10.586L9.172 7.757L7.758 9.172L10.586 12l-2.828 2.828l1.414 1.415l2.829-2.829l2.828 2.829l1.414-1.415L13.415 12z"></svg:path>`,
})
export class TdesignCloseRectangleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
