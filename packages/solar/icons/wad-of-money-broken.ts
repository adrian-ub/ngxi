import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWadOfMoneyBrokenIcon],svg[solar-wad-of-money-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M15 5H9c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C2 7.787 2 9.19 2 12s0 4.213.674 5.222a4 4 0 0 0 1.104 1.104c.347.232.74.384 1.222.484M9 19h6c2.809 0 4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C22 16.213 22 14.81 22 12s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104c-.347-.232-.74-.384-1.222-.484"></svg:path><svg:path d="M9 9a3 3 0 1 0 0 6m6-6a3 3 0 1 1 0 6"></svg:path><svg:path stroke-linecap="round" d="M9 5v14m6-14v14"></svg:path></svg:g>`,
})
export class SolarWadOfMoneyBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
