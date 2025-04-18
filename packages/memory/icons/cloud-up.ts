import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCloudUpIcon],svg[memory-cloud-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16h-3v-2h2v-1h1v-2h-1v-1h-4V9h1V6h-1V5h-1V4H9v1H8v2h1v1H6v1H4v1H3v3h1v1h2v2H3v-1H2v-1H1V9h1V8h1V7h2V6h1V4h1V3h1V2h6v1h1v1h1v1h1v3h2v1h1v1h1v4h-1v1h-1m-7 5h-2v-4H7v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h-3Z"></svg:path>`,
})
export class MemoryCloudUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
