import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCashOutLinearIcon],svg[solar-cash-out-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18.667 11C20.55 10.721 22 9.046 22 7.02C22 4.8 20.259 3 18.111 3H5.89C3.74 3 2 4.8 2 7.02C2 9.046 3.449 10.721 5.333 11"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 6v7m0 0l2-2.333M12 13l-2-2.333"></svg:path><svg:path d="M5 10c0-1.886 0-2.828.586-3.414S7.114 6 9 6h6c1.886 0 2.828 0 3.414.586S19 8.114 19 10v6c0 1.886 0 2.828-.586 3.414S16.886 20 15 20H9c-1.886 0-2.828 0-3.414-.586S5 17.886 5 16z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 17h14"></svg:path></svg:g>`,
})
export class SolarCashOutLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
