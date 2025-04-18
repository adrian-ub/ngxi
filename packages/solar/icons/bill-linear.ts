import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBillLinearIcon],svg[solar-bill-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 2h20"></svg:path><svg:path d="M4 2h16v10.27c0 1.34 0 2.009-.268 2.6c-.268.59-.773 1.03-1.781 1.912l-2 1.749C14.068 20.177 13.127 21 12 21s-2.068-.823-3.951-2.47l-2-1.748C5.04 15.9 4.536 15.46 4.269 14.87C4 14.28 4 13.61 4 12.27z"></svg:path><svg:path stroke-linecap="round" d="M8.5 13h7m-7-5h7"></svg:path></svg:g>`,
})
export class SolarBillLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
