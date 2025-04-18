import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSunriseLinearIcon],svg[solar-sunrise-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 22h8M5 19h14M2 16h20"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M12 6a6 6 0 0 0-4.5 9.969h9A6 6 0 0 0 12 6Z"></svg:path><svg:path fill="currentColor" d="m12 10l.53-.53a.75.75 0 0 0-1.06 0zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm-4-1.06a.75.75 0 1 0 1.06 1.06zM12.75 16v-6h-1.5v6zm-1.28-5.47l2 2l1.06-1.06l-2-2zm0-1.06l-2 2l1.06 1.06l2-2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 2v1m10 9h-1M3 12H2m17.07-7.07l-.392.393M5.322 5.322l-.393-.393"></svg:path></svg:g>`,
})
export class SolarSunriseLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
