import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8IphoneIcon],svg[icons8-iphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4C9.355 4 8 5.355 8 7v18c0 1.645 1.355 3 3 3h10c1.645 0 3-1.355 3-3V7c0-1.645-1.355-3-3-3zm0 2h10c.555 0 1 .445 1 1v18c0 .555-.445 1-1 1H11c-.555 0-1-.445-1-1V7c0-.555.445-1 1-1m5 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class Icons8IphoneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
