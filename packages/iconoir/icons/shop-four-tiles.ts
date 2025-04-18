import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirShopFourTilesIcon],svg[iconoir-shop-four-tiles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20.485 3h-3.992l.5 5s1 1 2.5 1a3.23 3.23 0 0 0 2.139-.806a.5.5 0 0 0 .15-.465L21.076 3.5a.6.6 0 0 0-.591-.5Z"></svg:path><svg:path d="m16.493 3l.5 5s-1 1-2.5 1s-2.5-1-2.5-1V3z"></svg:path><svg:path d="M11.993 3v5s-1 1-2.5 1s-2.5-1-2.5-1l.5-5z"></svg:path><svg:path d="M7.493 3H3.502a.6.6 0 0 0-.592.501L2.205 7.73a.5.5 0 0 0 .15.465c.328.29 1.061.806 2.138.806c1.5 0 2.5-1 2.5-1z"></svg:path><svg:path d="M3 9v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9"></svg:path><svg:path stroke-miterlimit="16" d="M14.833 21v-6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6"></svg:path></svg:g>`,
})
export class IconoirShopFourTilesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
