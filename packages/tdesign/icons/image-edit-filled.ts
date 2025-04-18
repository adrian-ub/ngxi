import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignImageEditFilledIcon],svg[tdesign-image-edit-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h8.501l-.001-3.456l4.23-4.229L9 8.585l-5 5V4h16v5.47l2 2z"></svg:path><svg:path fill="currentColor" d="M16 5.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m7.914 10.963l-4.127-4.127l-7.287 7.286l.001 4.128h4.127zm-6.463 1.037l1.299 1.3l-2.95 2.95h-1.3v-1.3z"></svg:path>`,
})
export class TdesignImageEditFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
