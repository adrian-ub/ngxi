import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSawtoothWaveIcon],svg[mdi-sawtooth-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22V6.83L2 16v-2.83L13 2v15.17L22 8v2.83z"></svg:path>`,
})
export class MdiSawtoothWaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
