import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MobileReportIcon],svg[fluent-mdl2-mobile-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 384v256h-384V384zM0 1024h384v640H0zm512-640h384v1280H512zm1280 384q27 0 50 10t40 27t28 41t10 50v1024q0 27-10 50t-27 40t-41 28t-50 10h-640q-27 0-50-10t-40-27t-28-41t-10-50V896q0-27 10-50t27-40t41-28t50-10zm0 128h-640v1024h640zm-512 768h384v128h-384zm128-1024h-384V0h384z"></svg:path>`,
})
export class FluentMdl2MobileReportIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
