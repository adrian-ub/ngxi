import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCashOutLineDuotoneIcon],svg[solar-cash-out-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18.667 12C20.55 11.721 22 10.046 22 8.02C22 5.8 20.259 4 18.111 4H5.89C3.74 4 2 5.8 2 8.02c0 2.026 1.449 3.701 3.333 3.98" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 7v7m0 0l2-2.333M12 14l-2-2.333"></svg:path><svg:path d="M5 11c0-1.886 0-2.828.586-3.414S7.114 7 9 7h6c1.886 0 2.828 0 3.414.586S19 9.114 19 11v6c0 1.886 0 2.828-.586 3.414S16.886 21 15 21H9c-1.886 0-2.828 0-3.414-.586S5 18.886 5 17z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 18h14" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCashOutLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
