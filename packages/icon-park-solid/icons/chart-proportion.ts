import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidChartProportionIcon],svg[icon-park-solid-chart-proportion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M16.345 5.518a20 20 0 0 0-6.487 4.34A19.94 19.94 0 0 0 4 24c0 11.046 8.954 20 20 20v0a19.94 19.94 0 0 0 14.142-5.858a20 20 0 0 0 4.34-6.487"></svg:path><svg:path fill="currentColor" d="M24 24h20c0-11.046-8.954-20-20-20z"></svg:path></svg:g>`,
})
export class IconParkSolidChartProportionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
