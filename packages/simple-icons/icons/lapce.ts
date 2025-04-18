import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsLapceIcon],svg[simple-icons-lapce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.802 1.267L1.608 0v24L8 20.31v-2.535L3.802 20.2Zm4.208 13.9V6.231L18.003 12l-7.798 4.503v2.533L22.392 12L5.806 2.424V16.44Zm5.598-3.231L10.205 9.97v3.93Z"></svg:path>`,
})
export class SimpleIconsLapceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
