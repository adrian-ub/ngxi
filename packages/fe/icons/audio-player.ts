import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feAudioPlayerIcon],svg[fe-audio-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2zm-6 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8M8 4v6h8V4zm4 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class FeAudioPlayerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
