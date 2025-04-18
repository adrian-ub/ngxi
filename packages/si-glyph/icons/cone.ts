import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphConeIcon],svg[si-glyph-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.287 13.025h-2.013l-.528-2h-9.57l-.528 2H1.692c-.37 0-.671.271-.671.609v.684c0 .337.301.609.671.609h14.596c.37 0 .671-.272.671-.609v-.684c-.001-.337-.302-.609-.672-.609m-5.08-11.994h-4.41l-.759 2.921h5.931zm1.139 4.973H5.658l-.637 2.951h7.963z"></svg:path>`,
})
export class SiGlyphConeIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
