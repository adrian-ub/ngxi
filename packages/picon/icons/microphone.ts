import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMicrophoneIcon],svg[picon-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5V1h2v4M1 6V4l1-1v3h4V3l1 1v2L5 7v1H3V7"></svg:path>`,
})
export class PiconMicrophoneIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
