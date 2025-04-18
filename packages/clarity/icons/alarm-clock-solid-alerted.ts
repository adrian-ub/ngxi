import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityAlarmClockSolidAlertedIcon],svg[clarity-alarm-clock-solid-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.42 3.43a5.77 5.77 0 0 0-7.64.41a5.72 5.72 0 0 0-.38 7.64a16.08 16.08 0 0 1 8.02-8.05" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M28 27.78a13.88 13.88 0 0 0 3.77-12.38h-9.54A3.69 3.69 0 0 1 19 13.56v-.16v3.78l6 2.92a1 1 0 1 1-.87 1.8L17 18.44V9.69a1 1 0 0 1 2 0V10v-.11l3-5.28A14 14 0 0 0 8 27.88l-2.44 2.55A1 1 0 1 0 7 31.84l2.66-2.66a13.9 13.9 0 0 0 16.88-.08l2.74 2.74a1 1 0 0 0 1.41-1.41Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"></svg:path><svg:path fill="currentColor" d="M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityAlarmClockSolidAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
