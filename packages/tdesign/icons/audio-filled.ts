import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAudioFilledIcon],svg[tdesign-audio-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 15a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"></svg:path><svg:path fill="currentColor" d="M21 1H3v22h18zm-9 8.75a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5m-1.004-4.754H13V7h-2.004z"></svg:path>`,
})
export class TdesignAudioFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
