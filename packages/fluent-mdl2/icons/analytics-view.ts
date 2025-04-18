import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AnalyticsViewIcon],svg[fluent-mdl2-analytics-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 128v1664H0V128zM128 256v256h1792V256zm1792 1408V640H128v1024zM256 896h128v640H256zm256 384h128v256H512zm256-128h128v384H768zm256-384h128v768h-128zm512 128h128v640h-128zm-256 256h128v384h-128z"></svg:path>`,
})
export class FluentMdl2AnalyticsViewIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
