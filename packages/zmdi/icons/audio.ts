import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiAudioIcon],svg[zmdi-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 0h149v64h-85v235h-1q-4 36-31 60.5T96 384q-40 0-68-28T0 288t28-68t68-28q15 0 32 6z"></svg:path>`,
})
export class ZmdiAudioIcon {
  readonly viewBox = input("0 0 280 384")
  readonly width = input("0.73em")
  readonly height = input("1em")
}
