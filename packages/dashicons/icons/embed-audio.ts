import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsEmbedAudioIcon],svg[dashicons-embed-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-7 3H7v4c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2c.4 0 .7.1 1 .3V5h4zm4 3.5L12.5 12l1.5 1.5V15l-3-3l3-3zm1 4.5v-1.5l1.5-1.5l-1.5-1.5V9l3 3z"></svg:path>`,
})
export class DashiconsEmbedAudioIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
