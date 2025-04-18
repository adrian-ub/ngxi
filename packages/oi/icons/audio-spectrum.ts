import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiAudioSpectrumIcon],svg[oi-audio-spectrum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0v8h1V0zM2 1v6h1V1zm4 1v4h1V2zM0 3v2h1V3z"></svg:path>`,
})
export class OiAudioSpectrumIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
