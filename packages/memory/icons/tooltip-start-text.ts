import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTooltipStartTextIcon],svg[memory-tooltip-start-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8V6h8v2zm0 8v-2h6v2zm0-4v-2h8v2zm-4 8V2h1V1h14v1h1v5h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v5h-1v1H2v-1zm2-1h12v-5h1v-1h1v-1h1v-2h-1V9h-1V8h-1V3H3z"></svg:path>`,
})
export class MemoryTooltipStartTextIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
