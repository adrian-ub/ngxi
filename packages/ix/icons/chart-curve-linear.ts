import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChartCurveLinearIcon],svg[ix-chart-curve-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m106.667 64l-.001 341.333H448V448H64V64zm188.585 52.403l1.342 2.425l106.667 224l-38.522 18.344l-87.406-183.593l-87.405 183.593l-38.522-18.344l106.666-224c7.315-15.362 28.414-16.17 37.18-2.425"></svg:path>`,
})
export class IxChartCurveLinearIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
