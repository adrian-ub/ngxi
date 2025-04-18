import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DiagnosticDataBarTooltipIcon],svg[fluent-mdl2-diagnostic-data-bar-tooltip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 0h1792v1792h-640l-256 256l-256-256H128zm1664 1664V128H256v1536h564l204 204l204-204zM768 640v896H512V640zm384 384v512H896v-512zm384-640v1152h-256V384z"></svg:path>`,
})
export class FluentMdl2DiagnosticDataBarTooltipIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
