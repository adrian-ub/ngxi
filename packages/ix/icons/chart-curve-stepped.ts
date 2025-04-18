import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChartCurveSteppedIcon],svg[ix-chart-curve-stepped-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m106.667 64l-.001 341.333H448V448H64V64zm298.666 42.667v256h-42.666V149.333h-85.334v213.334h-128V320h85.334V106.667z"></svg:path>`,
})
export class IxChartCurveSteppedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
