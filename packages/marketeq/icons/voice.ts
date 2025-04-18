import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqVoiceIcon],svg[marketeq-voice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.25 25h2.083a4.167 4.167 0 0 1 4.167 4.167v2.083a4.167 4.167 0 1 0 8.333 0v-12.5a4.167 4.167 0 0 1 8.334 0v12.5a4.167 4.167 0 1 0 8.333 0v-2.083A4.167 4.167 0 0 1 41.667 25h2.083"></svg:path>`,
})
export class MarketeqVoiceIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
