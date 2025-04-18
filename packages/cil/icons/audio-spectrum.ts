import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilAudioSpectrumIcon],svg[cil-audio-spectrum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 160h32v192H16zm360 0h32v192h-32zM104 88h32v328h-32zm184 8h32v320h-32zm176 0h32v320h-32zM192 16h32v480h-32z"></svg:path>`,
})
export class CilAudioSpectrumIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
