import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbMinimalisticBrokenIcon],svg[solar-lightbulb-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 19.5h4M10.667 22h2.666M15 2.602A7.7 7.7 0 0 0 12 2C8.134 2 5 4.807 5 8.218v.084c.009 1.996.87 3.917 2.41 5.379l1.105 1.039c.31.291.485.698.485 1.123C9 16.482 9.518 17 10.157 17h3.686c.639 0 1.157-.518 1.157-1.157c0-.425.176-.832.485-1.123l1.104-1.04c1.542-1.461 2.402-3.382 2.41-5.378L19 8.218c0-.78-.164-1.528-.462-2.218"></svg:path>`,
})
export class SolarLightbulbMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
