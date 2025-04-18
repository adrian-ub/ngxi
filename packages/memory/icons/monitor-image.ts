import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryMonitorImageIcon],svg[memory-monitor-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6h2v1h1v2h-1v1h-2V9h-1V7h1zM2 2h18v1h1v12h-1v1h-7v2h2v2H7v-2h2v-2H2v-1H1V3h1zm1 2v5h1V8h1V7h1V6h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h4V4zm7 7H9v-1H8V9H6v1H5v1H4v1H3v2h9v-1h-1v-1h-1z"></svg:path>`,
})
export class MemoryMonitorImageIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
