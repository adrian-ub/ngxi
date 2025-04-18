import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphFactoryIcon],svg[si-glyph-factory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 2v7L9 6v3L5 6v3L0 6v9h15V2zM3 12H1v-2h2zm4 0H5v-2h2zm4 0H9v-2h2z"></svg:path>`,
})
export class SiGlyphFactoryIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
