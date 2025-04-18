import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimChartPieIcon],svg[uim-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12V2c5.523 0 10 4.477 10 10z" opacity=".25"></svg:path><svg:path fill="currentColor" d="m12 12l5 8.66A10.01 10.01 0 0 0 22 12z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17 20.66L12 12V2c-5.523.002-9.999 4.48-9.997 10.003S6.483 22.002 12.007 22A10 10 0 0 0 17 20.662l.003-.005l-.004.003z"></svg:path>`,
})
export class UimChartPieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
