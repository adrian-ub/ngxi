import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsAudioIcon],svg[gridicons-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4v10.184A3 3 0 0 0 7 14a3 3 0 1 0 3 3V7h7v4.184A3 3 0 0 0 16 11a3 3 0 1 0 3 3V4z"></svg:path>`,
})
export class GridiconsAudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
