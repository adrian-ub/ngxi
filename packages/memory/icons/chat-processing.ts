import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryChatProcessingIcon],svg[memory-chat-processing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12H7v-2h2m4 2h-2v-2h2m4 2h-2v-2h2M6 20H1v-2h1v-1h1v-1h1v-2H3V8h1V7h1V6h1V5h2V4h8v1h2v1h1v1h1v1h1v6h-1v1h-1v1h-1v1h-2v1H8v1H6m0-1v-1h1v-1h8v-1h2v-1h1v-1h1V9h-1V8h-1V7h-2V6H9v1H7v1H6v1H5v4h1v3H5v1H4v1Z"></svg:path>`,
})
export class MemoryChatProcessingIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
