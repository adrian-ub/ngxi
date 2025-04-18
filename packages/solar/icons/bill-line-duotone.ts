import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBillLineDuotoneIcon],svg[solar-bill-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 2h20"></svg:path><svg:path d="M4 2h16v10.277c0 1.34 0 2.01-.268 2.601s-.773 1.032-1.781 1.915l-2 1.75c-1.883 1.647-2.824 2.47-3.951 2.47s-2.068-.823-3.951-2.47l-2-1.75c-1.009-.883-1.513-1.324-1.78-1.915C4 14.288 4 13.618 4 12.278z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M8.5 13h7m-7-5h7"></svg:path></svg:g>`,
})
export class SolarBillLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
