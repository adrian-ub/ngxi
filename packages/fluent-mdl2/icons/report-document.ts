import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ReportDocumentIcon],svg[fluent-mdl2-report-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 549v1499H256V0h987zm-512-37h293l-293-293zm384 1408V640h-512V128H384v1792zm-768-512h256v384H896zm-384-256h256v640H512zm768-256h256v896h-256z"></svg:path>`,
})
export class FluentMdl2ReportDocumentIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
