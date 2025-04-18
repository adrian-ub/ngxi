import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiSpeakerIcon],svg[fxemoji-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ADB8BC" d="M306.353 438.735L155.035 285.036c-18.786-19.082-18.786-49.708 0-68.79l151.318-153.7c30.772-31.257 83.962-9.467 83.962 34.395V404.34c0 43.862-53.19 65.652-83.962 34.395"></svg:path><svg:path fill="#597B91" d="M227.291 359.044h-89.869c-15.84 0-28.8-12.96-28.8-28.8V171.038c0-15.84 12.96-28.8 28.8-28.8h89.869z"></svg:path>`,
})
export class FxemojiSpeakerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
