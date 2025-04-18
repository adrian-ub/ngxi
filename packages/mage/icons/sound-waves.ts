import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageSoundWavesIcon],svg[mage-sound-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 9.938v4.124m3.7-7.217v10.31m3.7-13.918v17.526m3.7-13.631v9.736m3.7-7.302v4.868m3.7-3.465v2.062"></svg:path>`,
})
export class MageSoundWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
