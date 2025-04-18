import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphBagPlusIcon],svg[si-glyph-bag-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.494 4.011a.49.49 0 0 1-.489-.492a2.51 2.51 0 0 0-2.503-2.514A2.51 2.51 0 0 0 4 3.519a.49.49 0 1 1-.979 0C3.021 1.59 4.583.021 6.502.021c1.92 0 3.482 1.569 3.482 3.498a.49.49 0 0 1-.49.492"></svg:path><svg:path d="M12.492 4.011a.49.49 0 0 1-.488-.492c0-1.386-1.119-2.514-2.492-2.514a.49.49 0 0 1-.488-.492a.49.49 0 0 1 .488-.492c1.912 0 3.469 1.569 3.469 3.498a.49.49 0 0 1-.489.492M11 13h5v1h-5z"></svg:path><svg:path d="M13 11h1v5h-1zm1.371-8h-1.329v7h1.923V3.565c0-.313-.267-.565-.594-.565M10 12h1.951l.005-9l-10.312.061c-.33 0-.601.252-.601.565V15.4c0 .312.271.6.601.6H12s-.05-.416-.049-1H10z"></svg:path></svg:g>`,
})
export class SiGlyphBagPlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
