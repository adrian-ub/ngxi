import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityPowerOutlineAlertedIcon],svg[clarity-power-outline-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 21a1 1 0 0 0 1-1V4a1 1 0 0 0-2 0v16a1 1 0 0 0 1 1" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M32.51 15.4h-2.07a13 13 0 1 1-19-7.5a1 1 0 0 0-1-1.73A15 15 0 1 0 33 19.15a15 15 0 0 0-.49-3.75" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"></svg:path><svg:path fill="currentColor" d="M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityPowerOutlineAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
