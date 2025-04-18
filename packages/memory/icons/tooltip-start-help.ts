import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTooltipStartHelpIcon],svg[memory-tooltip-start-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13H8v-2h1v-1h1V8H8v2H6V7h1V6h4v1h1v4h-1v1h-1m0 4H8v-2h2m6 7H2v-1H1V2h1V1h14v1h1v5h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v5h-1m-1-1v-5h1v-1h1v-1h1v-2h-1V9h-1V8h-1V3H3v16Z"></svg:path>`,
})
export class MemoryTooltipStartHelpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
