import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChartAreaMultiFilledIcon],svg[tdesign-chart-area-multi-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V2H2v20h20v-2z"></svg:path><svg:path fill="currentColor" d="M21 18.21V8.586l-5.617 5.617l-2.967-3.46L6 16.557v1.653z"></svg:path><svg:path fill="currentColor" d="M6 14.761V12.06l6.59-5.99l2.967 3.46L21 4.086V6.91l-5.558 5.558l-3.031-3.535z"></svg:path>`,
})
export class TdesignChartAreaMultiFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
