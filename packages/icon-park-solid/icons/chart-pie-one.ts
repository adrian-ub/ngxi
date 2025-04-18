import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidChartPieOneIcon],svg[icon-park-solid-chart-pie-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M5 24c0 10.493 8.507 19 19 19V26a2 2 0 0 1 2-2h17c0-10.493-8.507-19-19-19S5 13.507 5 24"></svg:path><svg:path d="M30 30h12v12H30z"></svg:path></svg:g>`,
})
export class IconParkSolidChartPieOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
