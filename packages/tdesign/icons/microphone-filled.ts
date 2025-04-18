import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMicrophoneFilledIcon],svg[tdesign-microphone-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.189 5.5H9v2H5v2h4v2H5V13q0 .252.02.5H9v2H5.544A6 6 0 0 0 11 19v1H6v2h12v-2h-5v-1a6 6 0 0 0 5.456-3.5H15v-2h3.98q.02-.248.02-.5v-1.5h-4v-2h4v-2h-4v-2h3.811A6 6 0 0 0 13 1h-2a6 6 0 0 0-5.811 4.5"></svg:path>`,
})
export class TdesignMicrophoneFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
