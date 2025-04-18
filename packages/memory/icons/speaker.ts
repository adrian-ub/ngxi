import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memorySpeakerIcon],svg[memory-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h14v1h1v18h-1v1H4v-1H3V2h1zm1 2v16h12V3zm4 2h1V4h2v1h1v2h-1v1h-2V7H9zm0 13v-1H8v-1H7v-4h1v-1h1v-1h4v1h1v1h1v4h-1v1h-1v1zm1-5H9v2h1v1h2v-1h1v-2h-1v-1h-2z"></svg:path>`,
})
export class MemorySpeakerIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
