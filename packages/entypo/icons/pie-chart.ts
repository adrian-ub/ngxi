import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoPieChartIcon],svg[entypo-pie-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 .958v9.039C11 10.551 10.551 11 9.997 11H.958A9.1 9.1 0 1 0 11 .958m-2 0A9.1 9.1 0 0 0 .958 9H9z"></svg:path>`,
})
export class EntypoPieChartIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
