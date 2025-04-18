import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityViewListLineIcon],svg[clarity-view-list-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8h2v2H2z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M7 10h24a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M2 14h2v2H2z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M31 14H7a1 1 0 0 0 0 2h24a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M2 20h2v2H2z" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="currentColor" d="M31 20H7a1 1 0 0 0 0 2h24a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-6"></svg:path><svg:path fill="currentColor" d="M2 26h2v2H2z" class="clr-i-outline clr-i-outline-path-7"></svg:path><svg:path fill="currentColor" d="M31 26H7a1 1 0 0 0 0 2h24a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-8"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityViewListLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
