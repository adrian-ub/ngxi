import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CRMReportIcon],svg[fluent-mdl2-c-r-m-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 1536h-384V384h384zM1280 512v896h128V512zm-256 1024H640V640h384zM768 768v640h128V768zM128 0h1792v1920H128v-384H0v-128h128V640H0V512h128zm1664 1792V128H256v384h128v128H256v768h128v128H256v256z"></svg:path>`,
})
export class FluentMdl2CRMReportIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
