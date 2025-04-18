import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDrinksFillIcon],svg[ri-drinks-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6.205a1.25 1.25 0 0 0-1.226 1.005L4.18 7H2v2h20V7h-2.18l-.8-3.995A1.25 1.25 0 0 0 17.796 2H16V0h-2zm5.66 9H4.34l1.141 9.893A1.25 1.25 0 0 0 6.723 22h10.554a1.25 1.25 0 0 0 1.242-1.107z"></svg:path>`,
})
export class RiDrinksFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
