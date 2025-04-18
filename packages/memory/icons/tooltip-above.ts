import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTooltipAboveIcon],svg[memory-tooltip-above-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h18v1h1v14h-1v1h-5v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H2v-1H1V2h1zm1 2v12h5v1h1v1h1v1h2v-1h1v-1h1v-1h5V3z"></svg:path>`,
})
export class MemoryTooltipAboveIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
