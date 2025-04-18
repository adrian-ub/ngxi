import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarListArrowUpMinimalisticLineDuotoneIcon],svg[solar-list-arrow-up-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 6H3m8 5H3m9 5H3" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M15 11.5L17.5 9m0 0l2.5 2.5M17.5 9v8"></svg:path></svg:g>`,
})
export class SolarListArrowUpMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
