import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiVibrationModeIcon],svg[twemoji-vibration-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F4900C" d="M36 32c0 4-4 4-4 4H4c-4 0-4-4-4-4V4c0-4 4-4 4-4h28s4 0 4 4z"></svg:path><svg:path fill="#FFF" d="M24 3H12C9 3 9 6 9 6v24c0 3 3 3 3 3h12c3 0 3-3 3-3V6c0-3-3-3-3-3m1 25H11V8h14zM2 15v5l5-2v-1zm1-2l4 2v-2l-4-3zm0 9l4-2v2l-4 3zm31-7v5l-5-2v-1zm-1-2l-4 2v-2l4-3zm0 9l-4-2v2l4 3z"></svg:path>`,
})
export class TwemojiVibrationModeIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
