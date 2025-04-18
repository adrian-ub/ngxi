import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAudioInputRcaIcon],svg[mdi-audio-input-rca-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6v6H5V6h2V2c0-.55.45-1 1-1s1 .45 1 1v4zm-6 8v2c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.42 2-1.52 2-2.82v-2zm12-8V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6zm-4 8v2c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.42 2-1.52 2-2.82v-2z"></svg:path>`,
})
export class MdiAudioInputRcaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
