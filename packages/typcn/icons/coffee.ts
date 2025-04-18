import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnCoffeeIcon],svg[typcn-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 19H5a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2m.5-14H5v9c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-2h.5c1.93 0 3.5-1.57 3.5-3.5S19.43 5 17.5 5M15 14H7V7h8zm2.5-4H16V7h1.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5"></svg:path>`,
})
export class TypcnCoffeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
