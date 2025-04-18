import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityClockOutlineBadgedIcon],svg[clarity-clock-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.92 10.75a1 1 0 0 0-2 0v8.72l5.9 4a1 1 0 1 0 1.11-1.66l-5-3.39Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:path fill="currentColor" d="M33.12 12.81a7.4 7.4 0 0 1-1.91.58a14.05 14.05 0 1 1-8.6-8.6a7.4 7.4 0 0 1 .58-1.91a16.06 16.06 0 1 0 9.93 9.93" class="clr-i-outline--badged clr-i-outline-path-2--badged"></svg:path><svg:path fill="currentColor" d="M18 6.38a11.56 11.56 0 0 0-2.27 22.89L16 27.7a10 10 0 1 1 7.39-18.1a7.5 7.5 0 0 1-.78-2.23A11.45 11.45 0 0 0 18 6.38" class="clr-i-outline--badged clr-i-outline-path-3--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityClockOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
