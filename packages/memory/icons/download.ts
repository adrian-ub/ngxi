import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryDownloadIcon],svg[memory-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 17v2H4v-2zM14 2v6h4v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H6v-1H5V9H4V8h4V2zm-2 2h-2v6H9v1h1v1h2v-1h1v-1h-1z"></svg:path>`,
})
export class MemoryDownloadIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
