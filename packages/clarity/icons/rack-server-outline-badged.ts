import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityRackServerOutlineBadgedIcon],svg[clarity-rack-server-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9h2v2H6z" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:path fill="currentColor" d="M6 17h2v2H6z" class="clr-i-outline--badged clr-i-outline-path-2--badged"></svg:path><svg:path fill="currentColor" d="M10 17h14v2H10z" class="clr-i-outline--badged clr-i-outline-path-3--badged"></svg:path><svg:path fill="currentColor" d="M6 25h2v2H6z" class="clr-i-outline--badged clr-i-outline-path-4--badged"></svg:path><svg:path fill="currentColor" d="M10 25h14v2H10z" class="clr-i-outline--badged clr-i-outline-path-5--badged"></svg:path><svg:path fill="currentColor" d="M10 11h14v-.51A7.5 7.5 0 0 1 23.13 9H10Z" class="clr-i-outline--badged clr-i-outline-path-6--badged"></svg:path><svg:path fill="currentColor" d="M30 13.5a7.5 7.5 0 0 1-2.68-.5H4V7h18.57a7.5 7.5 0 0 1-.07-1a7.5 7.5 0 0 1 .07-1H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34a7.46 7.46 0 0 1-4 1.16M4 15h28v6H4Zm0 14v-6h28v6Z" class="clr-i-outline--badged clr-i-outline-path-7--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-8--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityRackServerOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
