import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBubbleChartIcon],svg[icon-park-bubble-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="34" cy="14" r="9"></svg:circle><svg:circle cx="12" cy="25" r="7"></svg:circle><svg:circle cx="29" cy="37" r="5"></svg:circle></svg:g>`,
})
export class IconParkBubbleChartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
