import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDrinksLineIcon],svg[ri-drinks-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6.205a1.25 1.25 0 0 0-1.226 1.005L4.18 7H2v2h2.109L5.48 20.893A1.25 1.25 0 0 0 6.723 22h10.554a1.25 1.25 0 0 0 1.242-1.107L19.89 9H22V7h-2.18l-.8-3.995A1.25 1.25 0 0 0 17.796 2H16V0h-2zm3.78 5H6.22l.6-3h10.36zM6.122 9h11.756l-1.27 11H7.392z"></svg:path>`,
})
export class RiDrinksLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
