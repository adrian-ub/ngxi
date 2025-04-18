import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphShieldPlusIcon],svg[si-glyph-shield-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.961v6.074c0 5.016 6.546 7.913 6.546 7.913s6.423-2.73 6.423-7.929c0-5.196.002-6.059.002-6.059S12.094.011 8.546.011S2 1.961 2 1.961m9.031 6.101H9V10H7.938V8.062H6V7h1.938V4.938H9V7h2.031z"></svg:path>`,
})
export class SiGlyphShieldPlusIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
