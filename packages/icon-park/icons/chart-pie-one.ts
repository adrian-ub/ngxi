import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChartPieOneIcon],svg[icon-park-chart-pie-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M5 24C5 34.4934 13.5066 43 24 43V26C24 24.8954 24.8954 24 26 24H43C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24Z"></svg:path><svg:rect width="12" height="12" x="30" y="30"></svg:rect></svg:g>`,
})
export class IconParkChartPieOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
