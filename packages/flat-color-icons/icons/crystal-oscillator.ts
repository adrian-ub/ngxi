import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsCrystalOscillatorIcon],svg[flat-color-icons-crystal-oscillator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF9800" d="M3 28h26v4H3zm0-12h26v4H3z"></svg:path><svg:path fill="#2196F3" d="M43 11H20v26h23c1.1 0 2-.9 2-2V13c0-1.1-.9-2-2-2"></svg:path><svg:path fill="#64B5F6" d="M20 9h-2v30h2c1.1 0 2-.9 2-2V11c0-1.1-.9-2-2-2"></svg:path>`,
})
export class FlatColorIconsCrystalOscillatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
