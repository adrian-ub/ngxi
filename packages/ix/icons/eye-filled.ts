import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixEyeFilledIcon],svg[ix-eye-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 85.333C405.334 85.333 469.334 256 469.334 256s-64 170.666-213.334 170.666C106.667 426.666 42.667 256 42.667 256S106.667 85.333 256 85.333m0 96c-41.237 0-74.666 33.43-74.666 74.667s33.43 74.666 74.666 74.666c41.237 0 74.667-33.43 74.667-74.666c0-41.237-33.43-74.667-74.667-74.667M256 288c-17.644 0-32-14.356-32-32c0-17.645 14.356-32 32-32c17.645 0 32 14.355 32 32c0 17.644-14.355 32-32 32"></svg:path>`,
})
export class IxEyeFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
