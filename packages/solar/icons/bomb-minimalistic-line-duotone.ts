import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBombMinimalisticLineDuotoneIcon],svg[solar-bomb-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="9.5" cy="14.5" r="7.5"></svg:circle><svg:path stroke-linecap="round" d="m17 7l-2 2" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m19.5 7.5l1 .5M16 3.5l.5 1M19 5l1-1"></svg:path></svg:g>`,
})
export class SolarBombMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
