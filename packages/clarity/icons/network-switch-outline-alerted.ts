import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityNetworkSwitchOutlineAlertedIcon],svg[clarity-network-switch-outline-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.12 22h1.8v3h-1.8z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M12.12 22h1.8v3h-1.8z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"></svg:path><svg:path fill="currentColor" d="M17.11 22h1.8v3h-1.8z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"></svg:path><svg:path fill="currentColor" d="M22.1 22h1.8v3h-1.8z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"></svg:path><svg:path fill="currentColor" d="M27.1 22h1.8v3h-1.8z" class="clr-i-outline--alerted clr-i-outline-path-5--alerted"></svg:path><svg:path fill="currentColor" d="M6.23 18h23.69v1.4H6.23z" class="clr-i-outline--alerted clr-i-outline-path-6--alerted"></svg:path><svg:path fill="currentColor" d="M33.91 18.47L33 15.4h-2.14L32 19.06V27H4v-7.94L7.13 9h12.43l1.15-2H7.13a2 2 0 0 0-1.91 1.41L2.09 18.48a2 2 0 0 0-.09.59V27a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-7.94a2 2 0 0 0-.09-.59" class="clr-i-outline--alerted clr-i-outline-path-7--alerted"></svg:path><svg:path fill="currentColor" d="M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-outline--alerted clr-i-outline-path-8--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityNetworkSwitchOutlineAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
