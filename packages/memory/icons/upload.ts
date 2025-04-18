import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryUploadIcon],svg[memory-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 17v2H4v-2zM8 15V9H4V8h1V7h1V6h1V5h1V4h1V3h1V2h2v1h1v1h1v1h1v1h1v1h1v1h1v1h-4v6zm2-2h2V7h1V6h-1V5h-2v1H9v1h1z"></svg:path>`,
})
export class MemoryUploadIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
