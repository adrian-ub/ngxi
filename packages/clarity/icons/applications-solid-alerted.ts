import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityApplicationsSolidAlertedIcon],svg[clarity-applications-solid-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h6v6H4z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M4 15h6v6H4z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"></svg:path><svg:path fill="currentColor" d="M4 26h6v6H4z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted"></svg:path><svg:path fill="currentColor" d="M15 15h6v6h-6z" class="clr-i-solid--alerted clr-i-solid-path-4--alerted"></svg:path><svg:path fill="currentColor" d="M15 26h6v6h-6z" class="clr-i-solid--alerted clr-i-solid-path-5--alerted"></svg:path><svg:path fill="currentColor" d="M26 15h6v6h-6z" class="clr-i-solid--alerted clr-i-solid-path-6--alerted"></svg:path><svg:path fill="currentColor" d="M26 26h6v6h-6z" class="clr-i-solid--alerted clr-i-solid-path-7--alerted"></svg:path><svg:path fill="currentColor" d="M15 10h4v-.11l2-3.39V4h-6Z" class="clr-i-solid--alerted clr-i-solid-path-8--alerted"></svg:path><svg:path fill="currentColor" d="M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-solid--alerted clr-i-solid-path-9--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityApplicationsSolidAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
