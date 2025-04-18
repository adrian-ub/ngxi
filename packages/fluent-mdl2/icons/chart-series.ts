import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ChartSeriesIcon],svg[fluent-mdl2-chart-series-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 640h384v1280H0V384h512zM384 512H128v1280h256zm128 256v1024h256V768zm1536 128v1024h-896V128h512v768zm-512-640h-256v1536h256zm384 768h-256v768h256z"></svg:path>`,
})
export class FluentMdl2ChartSeriesIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
