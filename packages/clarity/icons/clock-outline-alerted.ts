import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityClockOutlineAlertedIcon],svg[clarity-clock-outline-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.92 10.75a1 1 0 0 0-2 0v8.72l5.9 4a1 1 0 1 0 1.11-1.66l-5-3.39Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M33.77 15.39h-2a14 14 0 1 1-9.68-10.78l1-1.76A16 16 0 1 0 34 18a16 16 0 0 0-.23-2.61" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"></svg:path><svg:path fill="currentColor" d="M18 8a10 10 0 0 1 2 .23l.85-1.46a11.55 11.55 0 1 0-5.13 22.52L16 27.7A10 10 0 0 1 18 8" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"></svg:path><svg:path fill="currentColor" d="M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityClockOutlineAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
