import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityRackServerSolidAlertedIcon],svg[clarity-rack-server-solid-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 30a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-6H2Zm8-3h14v2H10Zm-4 0h2v2H6Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"></svg:path><svg:path fill="currentColor" d="m19 9.89l.56-.89H10V7h10.71l1.73-3H4a2 2 0 0 0-2 2v6h16.57A3.67 3.67 0 0 1 19 9.89M8 9H6V7h2Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"></svg:path><svg:path fill="currentColor" d="M33.68 15.4H22.23a3.69 3.69 0 0 1-2.88-1.4H2v8h32v-6.62ZM8 19H6v-2h2Zm16 0H10v-2h14Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted"></svg:path><svg:path fill="currentColor" d="M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-solid--alerted clr-i-solid-path-4--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityRackServerSolidAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
