import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAudioVideoIcon],svg[mdi-audio-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1v1c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1h6v1c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1h1a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2m-6 5H4v-2h10zm4 1a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2M6 15H4v-1h2zm4 0H8v-1h2zm4 0h-2v-1h2z"></svg:path>`,
})
export class MdiAudioVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
