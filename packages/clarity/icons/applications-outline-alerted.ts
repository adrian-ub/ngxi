import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityApplicationsOutlineAlertedIcon],svg[clarity-applications-outline-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8H4v2h6V4H8z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M8 19H4v2h6v-6H8z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"></svg:path><svg:path fill="currentColor" d="M19 19h-4v2h6v-6h-2z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"></svg:path><svg:path fill="currentColor" d="M30 15v4h-4v2h6v-6z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"></svg:path><svg:path fill="currentColor" d="M8 30H4v2h6v-6H8z" class="clr-i-outline--alerted clr-i-outline-path-5--alerted"></svg:path><svg:path fill="currentColor" d="M19 30h-4v2h6v-6h-2z" class="clr-i-outline--alerted clr-i-outline-path-6--alerted"></svg:path><svg:path fill="currentColor" d="M30 30h-4v2h6v-6h-2z" class="clr-i-outline--alerted clr-i-outline-path-7--alerted"></svg:path><svg:path fill="currentColor" d="M19 8h-4v2h4v-.11l2-3.39V4h-2Z" class="clr-i-outline--alerted clr-i-outline-path-8--alerted"></svg:path><svg:path fill="currentColor" d="M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-outline--alerted clr-i-outline-path-9--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityApplicationsOutlineAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
