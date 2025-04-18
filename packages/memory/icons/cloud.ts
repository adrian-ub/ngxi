import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCloudIcon],svg[memory-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 18H3v-1H2v-1H1v-5h1v-1h1V9h2V8h1V6h1V5h1V4h6v1h1v1h1v1h1v3h2v1h1v1h1v4h-1v1h-1m-1-1v-1h1v-2h-1v-1h-4v-1h1V8h-1V7h-1V6H9v1H8v2h1v1H6v1H4v1H3v3h1v1Z"></svg:path>`,
})
export class MemoryCloudIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
