import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTooltipEndTextIcon],svg[memory-tooltip-end-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8V6H9v2zm-2 8v-2H9v2zm2-4v-2H9v2zm4 8V2h-1V1H6v1H5v5H4v1H3v1H2v1H1v2h1v1h1v1h1v1h1v5h1v1h14v-1zm-2-1H7v-5H6v-1H5v-1H4v-2h1V9h1V8h1V3h12z"></svg:path>`,
})
export class MemoryTooltipEndTextIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
