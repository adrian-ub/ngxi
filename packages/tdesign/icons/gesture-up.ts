import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGestureUpIcon],svg[tdesign-gesture-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 4.5a3 3 0 0 1 6 0V8h1.46a3 3 0 0 1 1.511.409l4.13 2.409a3 3 0 0 1 1.334 3.54l-2.03 6.09a3 3 0 0 1-2.846 2.052H8.735a3 3 0 0 1-2.378-1.17l-4.836-6.288l1.017-1.527a2 2 0 0 1 2.098-.843l2.614.581zm3-1a1 1 0 0 0-1 1v11.247l-5.048-1.122l-.222.333l3.962 5.152a1 1 0 0 0 .793.39h8.074a1 1 0 0 0 .948-.684l2.03-6.09a1 1 0 0 0-.444-1.18l-4.13-2.41A1 1 0 0 0 14.71 10h-3.46V4.5a1 1 0 0 0-1-1"></svg:path>`,
})
export class TdesignGestureUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
