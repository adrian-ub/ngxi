import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryMicrophoneIcon],svg[memory-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 21v-3H8v-1H6v-1H5v-1H4v-2H3V9h2v3h1v2h1v1h2v1h4v-1h2v-1h1v-2h1V9h2v4h-1v2h-1v1h-1v1h-2v1h-2v3zm-2-8v-1H7V3h1V2h1V1h4v1h1v1h1v9h-1v1h-1v1H9v-1zm1-2h1v1h2v-1h1V4h-1V3h-2v1H9z"></svg:path>`,
})
export class MemoryMicrophoneIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
