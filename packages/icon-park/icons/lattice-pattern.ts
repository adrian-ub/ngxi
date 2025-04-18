import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLatticePatternIcon],svg[icon-park-lattice-pattern-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 8H10"></svg:path><svg:path d="M14 16H18"></svg:path><svg:path d="M16 6V10"></svg:path><svg:path d="M8 14V18"></svg:path><svg:path d="M22 8H26"></svg:path><svg:path d="M30 16H34"></svg:path><svg:path d="M32 6V10"></svg:path><svg:path d="M24 14V18"></svg:path><svg:path d="M38 8H42"></svg:path><svg:path d="M40 14V18"></svg:path><svg:path d="M6 24H10"></svg:path><svg:path d="M14 32H18"></svg:path><svg:path d="M16 22V26"></svg:path><svg:path d="M8 30V34"></svg:path><svg:path d="M22 24H26"></svg:path><svg:path d="M30 32H34"></svg:path><svg:path d="M32 22V26"></svg:path><svg:path d="M24 30V34"></svg:path><svg:path d="M38 24H42"></svg:path><svg:path d="M40 30V34"></svg:path><svg:path d="M6 40H10"></svg:path><svg:path d="M16 38V42"></svg:path><svg:path d="M22 40H26"></svg:path><svg:path d="M32 38V42"></svg:path><svg:path d="M38 40H42"></svg:path></svg:g>`,
})
export class IconParkLatticePatternIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
