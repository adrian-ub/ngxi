import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChartLineAreaIcon],svg[icon-park-chart-line-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M6 6V42H42"></svg:path><svg:path fill="#2F88FF" d="M14 34L22 18L32 27L42 6V34H14Z"></svg:path></svg:g>`,
})
export class IconParkChartLineAreaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
