import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ReportWarningIcon],svg[fluent-mdl2-report-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m910 1664l-64 128H256V0h1536v1179l-128-256V128H384v1536zM640 896H512V768h128zm654 0H768V768h590zm-782 256h128v128H512zm256 0h398l-64 128H768zM640 512H512V384h128zm896 0H768V384h768zm0 896v320h-128v-320zm-128 384h128v128h-128zm640 256H896l576-1152zm-971-112h790l-395-790z"></svg:path>`,
})
export class FluentMdl2ReportWarningIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
