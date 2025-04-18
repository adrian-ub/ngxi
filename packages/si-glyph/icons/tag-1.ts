import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphTag1Icon],svg[si-glyph-tag-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.546 15.951c-.509.509-.515-4.982-.515-4.982s-5.493-.007-4.983-.516L10.061.439c.508-.508 1.357-.484 1.896.053l3.55 3.551c.539.539.561 1.388.054 1.896z"></svg:path>`,
})
export class SiGlyphTag1Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
