import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiLyingFaceIcon],svg[twemoji-lying-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="18" r="16" fill="#FFCC4D"></svg:circle><svg:path fill="#664500" d="M11.471 13.529c0 1.706-.987 3.088-2.206 3.088s-2.206-1.382-2.206-3.088c0-1.705.987-3.088 2.206-3.088s2.206 1.383 2.206 3.088m11.529 0c0 1.706-.987 3.088-2.206 3.088s-2.206-1.382-2.206-3.088c0-1.705.988-3.088 2.206-3.088c1.219 0 2.206 1.383 2.206 3.088M10.118 29.382c1.765-4.412 11.471-4.412 11.471-2.647c-.001.883-7.06-.882-11.471 2.647"></svg:path><svg:path fill="#F4900C" d="M32.262 17.5H17c-1.511 0-2.734 1.344-2.734 3c0 1.657 1.224 3 2.734 3h15.262c1.513 0 2.738-1.343 2.738-3c0-1.656-1.226-3-2.738-3"></svg:path>`,
})
export class TwemojiLyingFaceIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
