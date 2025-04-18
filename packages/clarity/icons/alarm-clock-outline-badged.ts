import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityAlarmClockOutlineBadgedIcon],svg[clarity-alarm-clock-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.42 3.43a5.77 5.77 0 0 0-7.64.41a5.72 5.72 0 0 0-.38 7.64a16.08 16.08 0 0 1 8.02-8.05" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:path fill="currentColor" d="M18.86 9.5a.9.9 0 0 0-1.8 0v9l7.06 3.5a.9.9 0 1 0 .79-1.62l-6.06-3Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"></svg:path><svg:path fill="currentColor" d="M28 27.78a13.89 13.89 0 0 0 3.21-14.39a7 7 0 0 1-2.11.05a12 12 0 1 1-6.54-6.54a8 8 0 0 1-.06-.9a7.5 7.5 0 0 1 .11-1.21a14 14 0 0 0-14.5 23.09l-2.55 2.55A1 1 0 1 0 7 31.84l2.66-2.66a13.9 13.9 0 0 0 16.88-.08l2.74 2.74a1 1 0 0 0 1.41-1.41Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityAlarmClockOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
