import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityBuildingOutlineAlertedIcon],svg[clarity-building-outline-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8h2v2H8z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M12 8h2v2h-2z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"></svg:path><svg:path fill="currentColor" d="M16 8h2v2h-2z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"></svg:path><svg:path fill="currentColor" d="M8 13h2v2H8z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"></svg:path><svg:path fill="currentColor" d="M12 13h2v2h-2z" class="clr-i-outline--alerted clr-i-outline-path-5--alerted"></svg:path><svg:path fill="currentColor" d="M16 13h2v2h-2z" class="clr-i-outline--alerted clr-i-outline-path-6--alerted"></svg:path><svg:path fill="currentColor" d="M8 18h2v2H8z" class="clr-i-outline--alerted clr-i-outline-path-7--alerted"></svg:path><svg:path fill="currentColor" d="M12 18h2v2h-2z" class="clr-i-outline--alerted clr-i-outline-path-8--alerted"></svg:path><svg:path fill="currentColor" d="M16 18h2v2h-2z" class="clr-i-outline--alerted clr-i-outline-path-9--alerted"></svg:path><svg:path fill="currentColor" d="M8 23h2v2H8z" class="clr-i-outline--alerted clr-i-outline-path-10--alerted"></svg:path><svg:path fill="currentColor" d="M12 23h2v2h-2z" class="clr-i-outline--alerted clr-i-outline-path-11--alerted"></svg:path><svg:path fill="currentColor" d="M16 23h2v2h-2z" class="clr-i-outline--alerted clr-i-outline-path-12--alerted"></svg:path><svg:path fill="currentColor" d="M23 18h2v2h-2z" class="clr-i-outline--alerted clr-i-outline-path-13--alerted"></svg:path><svg:path fill="currentColor" d="M27 18h2v2h-2z" class="clr-i-outline--alerted clr-i-outline-path-14--alerted"></svg:path><svg:path fill="currentColor" d="M23 23h2v2h-2z" class="clr-i-outline--alerted clr-i-outline-path-15--alerted"></svg:path><svg:path fill="currentColor" d="M27 23h2v2h-2z" class="clr-i-outline--alerted clr-i-outline-path-16--alerted"></svg:path><svg:path fill="currentColor" d="M20 31h-3v-3H9v3H6V5.12A.12.12 0 0 1 6.12 5h13.76a.12.12 0 0 1 .12.12v3.12l2-3.41A2.12 2.12 0 0 0 19.88 3H6.12A2.12 2.12 0 0 0 4 5.12V33h18V15.38a3.7 3.7 0 0 1-2-.74Z" class="clr-i-outline--alerted clr-i-outline-path-17--alerted"></svg:path><svg:path fill="currentColor" d="M31 15.4V31h-8v2h10V15.4z" class="clr-i-outline--alerted clr-i-outline-path-18--alerted"></svg:path><svg:path fill="currentColor" d="M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-outline--alerted clr-i-outline-path-19--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityBuildingOutlineAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
