import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChinaRailwayFillIcon],svg[ri-china-railway-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19v-6l-2-1V9h6v3l-2 1v6l5 1v2H6v-2zM10 2.223V1h4v1.223a9.003 9.003 0 0 1 2.993 16.266l-1.11-1.664a7 7 0 1 0-7.767 0l-1.109 1.664A9.003 9.003 0 0 1 10 2.223"></svg:path>`,
})
export class RiChinaRailwayFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
