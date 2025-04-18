import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iwwaChartStyle2Icon],svg[iwwa-chart-style2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.676 8.345h8.156v25.633H6.676zm9.322 9.322h8.156v16.312h-8.156zm9.321-11.652h8.156v27.964h-8.156z"></svg:path>`,
})
export class IwwaChartStyle2Icon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
