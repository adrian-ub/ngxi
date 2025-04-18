import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRadarChartIcon],svg[icon-park-outline-radar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="m24 3l21.874 15.893L38 45H10L2.125 18.893z"></svg:path><svg:path stroke-linecap="round" d="m38 45l-7-8m-21 8l7-8M2 19l10 3m34-3l-10 3M24 3v10"></svg:path><svg:path d="m24 13l6.007 4.57L36 22l-5 15H17l-5-15l5.993-4.43zM7.594 14.92l-5.469 3.973l1.97 6.526m3.936 13.054L10 45h7m14 0h7l1.968-6.527m.437-23.553l5.469 3.973l-1.969 6.526M29.468 6.973L24 3l-5.47 3.973"></svg:path></svg:g>`,
})
export class IconParkOutlineRadarChartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
