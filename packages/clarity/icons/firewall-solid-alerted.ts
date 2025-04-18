import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityFirewallSolidAlertedIcon],svg[clarity-firewall-solid-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33.68 15.4H22.23a3.69 3.69 0 0 1-2.88-1.4H4v-2h8V8h2v4h4.57A3.67 3.67 0 0 1 19 9.89L21.29 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V15.38ZM14 28h-2v-4h2Zm10 0h-2v-4h2Zm8-6H4v-2h3v-4h2v4h8v-4h2v4h8v-4h2v4h3Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityFirewallSolidAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
