import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphStreet2Icon],svg[si-glyph-street-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.02 14.046v-13h-16v13zM14 6.953h2v1h-2zM9 1.992h4V4.02H9zM9 5h4.021v2H9zm0 3h4.021v2H9zm0 2.958h4v2H9zM5 6.953h2V8H5zm-3 0h2V8H2z"></svg:path>`,
})
export class SiGlyphStreet2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
