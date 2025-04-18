import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAudioIcon],svg[tdesign-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h18v22H3zm2 2v18h14V3zm5.996 1.996H13V7h-2.004zM12 11a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0"></svg:path>`,
})
export class TdesignAudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
