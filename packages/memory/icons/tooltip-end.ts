import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTooltipEndIcon],svg[memory-tooltip-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 20V2h-1V1H6v1H5v5H4v1H3v1H2v1H1v2h1v1h1v1h1v1h1v5h1v1h14v-1zm-2-1H7v-5H6v-1H5v-1H4v-2h1V9h1V8h1V3h12z"></svg:path>`,
})
export class MemoryTooltipEndIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
