import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTooltipBelowAlertIcon],svg[memory-tooltip-below-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 17h2v-2h-2zm0-3h2V9h-2zm-8 7h18v-1h1V6h-1V5h-5V4h-1V3h-1V2h-1V1h-2v1H9v1H8v1H7v1H2v1H1v14h1zm1-2V7h5V6h1V5h1V4h2v1h1v1h1v1h5v12z"></svg:path>`,
})
export class MemoryTooltipBelowAlertIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
