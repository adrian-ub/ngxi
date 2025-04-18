import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDice5Icon],svg[si-glyph-dice-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.763 0H3.178c-1.18 0-2.135.966-2.135 2.155v11.69c0 1.189.955 2.154 2.135 2.154h11.585a2.145 2.145 0 0 0 2.136-2.154V2.155A2.147 2.147 0 0 0 14.763 0M5.002 6.153c-1.146 0-2.075-.951-2.075-2.123s.929-2.123 2.075-2.123s2.076.951 2.076 2.123s-.93 2.123-2.076 2.123m8 0c-1.146 0-2.075-.951-2.075-2.123s.929-2.123 2.075-2.123s2.076.951 2.076 2.123s-.93 2.123-2.076 2.123m0 8c-1.146 0-2.075-.951-2.075-2.123s.929-2.123 2.075-2.123s2.076.951 2.076 2.123s-.93 2.123-2.076 2.123m-4-4c-1.146 0-2.075-.951-2.075-2.123s.929-2.123 2.075-2.123s2.076.951 2.076 2.123s-.93 2.123-2.076 2.123m-4 4c-1.146 0-2.075-.951-2.075-2.123s.929-2.123 2.075-2.123s2.076.951 2.076 2.123s-.93 2.123-2.076 2.123"></svg:path>`,
})
export class SiGlyphDice5Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
