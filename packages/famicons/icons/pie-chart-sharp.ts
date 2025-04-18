import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsPieChartSharpIcon],svg[famicons-pie-chart-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m58 362.09l-6.51-14.59A224 224 0 0 1 256 32h16v234.37Z"></svg:path><svg:path fill="currentColor" d="M304 66.46v220.65L94.62 380.78A208.31 208.31 0 0 0 272 480c114.69 0 208-93.31 208-208c0-103.81-76.45-190.1-176-205.54"></svg:path>`,
})
export class FamiconsPieChartSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
