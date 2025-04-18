import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwAreaChartIcon],svg[uiw-area-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.087 2.054c.198 0 .357.16.357.357c0 .018-.007.034-.01.052h.01v7.755c0 .197.16.357.357.357h7.78c.196 0 .356.16.356.357l-.002.01l.002.085c0 4.955-4.015 8.973-8.969 8.973S0 15.982 0 11.027s4.015-8.973 8.968-8.973l.096.002c.008.002.015-.002.023-.002M11.13 0c4.877.05 8.82 3.996 8.871 8.876c0 .197-.16.357-.357.357c-.018 0-.034-.008-.052-.01v.01H11.13a.357.357 0 0 1-.357-.357V.41h.01c-.002-.018-.01-.034-.01-.052c0-.197.16-.357.357-.357"></svg:path>`,
})
export class UiwAreaChartIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
