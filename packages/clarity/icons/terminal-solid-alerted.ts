import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityTerminalSolidAlertedIcon],svg[clarity-terminal-solid-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33.68 15.4H22.23A3.68 3.68 0 0 1 19 9.89l.4-.69H4V7h16.71l1.15-2H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V15.38ZM16.8 19.83l-10 4.59v-2.64l6.51-3l-6.51-3v-2.61l10 4.59Zm6.6 5.57H17V23h6.4Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTerminalSolidAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
