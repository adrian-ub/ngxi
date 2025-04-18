import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityClockSolidAlertedIcon],svg[clarity-clock-solid-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33.77 15.39H22.23A3.69 3.69 0 0 1 19 13.56c0-.09-.09-.18-.13-.27v5.11l5 3.39a1 1 0 0 1-1.11 1.66l-5.9-4v-8.7a1 1 0 0 1 1.91-.41a4 4 0 0 1 .23-.45L20.74 7A11.2 11.2 0 0 0 18 6.6a11.39 11.39 0 0 0-2.69 22.47L15 30.63A13 13 0 0 1 18 5a12.8 12.8 0 0 1 3.57.51l1.53-2.66A16 16 0 1 0 34 18a16 16 0 0 0-.23-2.61" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-solid--alerted clr-i-solid-path-1--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityClockSolidAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
