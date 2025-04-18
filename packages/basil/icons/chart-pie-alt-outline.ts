import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilChartPieAltOutlineIcon],svg[basil-chart-pie-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.25 5.788a7.251 7.251 0 1 0 7.962 7.962H12a.75.75 0 0 1-.75-.75zM3.25 13A8.75 8.75 0 0 1 12 4.25a.75.75 0 0 1 .75.75v7.25H20a.75.75 0 0 1 .75.75a8.75 8.75 0 1 1-17.5 0"></svg:path><svg:path d="M15.5 4.674V9.5h4.826A6.51 6.51 0 0 0 15.5 4.674m-.502-1.612c3.62.45 6.49 3.32 6.94 6.94c.069.548-.386.998-.938.998h-6.5a.5.5 0 0 1-.5-.5V4c0-.552.45-1.007.998-.938"></svg:path></svg:g>`,
})
export class BasilChartPieAltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
