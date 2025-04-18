import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBombMinimalisticLinearIcon],svg[solar-bomb-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="9.5" cy="14.5" r="7.5"></svg:circle><svg:path stroke-linecap="round" d="m17 7l-2 2m4.5-1.5l1 .5M16 3.5l.5 1M19 5l1-1"></svg:path></svg:g>`,
})
export class SolarBombMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
