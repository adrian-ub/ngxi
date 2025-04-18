import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDice1Icon],svg[si-glyph-dice-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.763 0H3.178c-1.18 0-2.135.966-2.135 2.155v11.69c0 1.189.955 2.154 2.135 2.154h11.585a2.145 2.145 0 0 0 2.136-2.154V2.155A2.147 2.147 0 0 0 14.763 0M9.017 11.155c-1.696 0-3.069-1.406-3.069-3.14s1.373-3.14 3.069-3.14c1.694 0 3.069 1.406 3.069 3.14s-1.375 3.14-3.069 3.14"></svg:path>`,
})
export class SiGlyphDice1Icon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
