import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTooltipEndHelpIcon],svg[memory-tooltip-end-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13h-2v-2h1v-1h1V8h-2v2h-2V7h1V6h4v1h1v4h-1v1h-1m0 4h-2v-2h2m6 7H6v-1H5v-5H4v-1H3v-1H2v-1H1v-2h1V9h1V8h1V7h1V2h1V1h14v1h1v18h-1m-1-1V3H7v5H6v1H5v1H4v2h1v1h1v1h1v5Z"></svg:path>`,
})
export class MemoryTooltipEndHelpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
