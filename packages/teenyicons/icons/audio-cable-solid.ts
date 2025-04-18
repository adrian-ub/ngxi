import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsAudioCableSolidIcon],svg[teenyicons-audio-cable-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.854.146a.5.5 0 0 0-.708 0l-1 1A.5.5 0 0 0 6 1.5V3h3V1.5a.5.5 0 0 0-.146-.354zM9 4v4H6V4zm1 5v3.5A1.5 1.5 0 0 1 8.5 14H8v1H7v-1h-.5A1.5 1.5 0 0 1 5 12.5V9z"></svg:path>`,
})
export class TeenyiconsAudioCableSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
