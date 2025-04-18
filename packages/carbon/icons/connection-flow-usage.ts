import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonConnectionFlowUsageIcon],svg[carbon-connection-flow-usage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 16l-1.414 1.414L25.172 22H15V5a2 2 0 0 0-2-2H3v2h10v17a2 2 0 0 0 2 2h10.172l-4.586 4.586L22 30l7-7z"></svg:path>`,
})
export class CarbonConnectionFlowUsageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
