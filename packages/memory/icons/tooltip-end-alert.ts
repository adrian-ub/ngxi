import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTooltipEndAlertIcon],svg[memory-tooltip-end-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15h-2v-2h2zm0-3h-2V7h2zm7-10v18h-1v1H6v-1H5v-5H4v-1H3v-1H2v-1H1v-2h1V9h1V8h1V7h1V2h1V1h14v1zm-2 1H7v5H6v1H5v1H4v2h1v1h1v1h1v5h12z"></svg:path>`,
})
export class MemoryTooltipEndAlertIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
