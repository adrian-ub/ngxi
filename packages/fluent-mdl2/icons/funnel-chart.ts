import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FunnelChartIcon],svg[fluent-mdl2-funnel-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h2048L1024 2048zm1841 128H207l128 256h1378zM783 1280l241 482l241-482zm546-128l128-256H591l128 256zm192-384l128-256H399l128 256z"></svg:path>`,
})
export class FluentMdl2FunnelChartIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
