import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphBagIcon],svg[si-glyph-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.494 4.011a.49.49 0 0 1-.489-.492a2.51 2.51 0 0 0-2.503-2.514A2.51 2.51 0 0 0 4 3.519a.49.49 0 1 1-.979 0C3.021 1.59 4.583.021 6.502.021c1.92 0 3.482 1.569 3.482 3.498a.49.49 0 0 1-.49.492"></svg:path><svg:path d="M12.492 4.011a.49.49 0 0 1-.488-.492c0-1.386-1.119-2.514-2.492-2.514a.49.49 0 0 1-.488-.492a.49.49 0 0 1 .488-.492c1.912 0 3.469 1.569 3.469 3.498a.49.49 0 0 1-.489.492m.55-.911V16h1.329c.327 0 .594-.254.594-.566V3.626c0-.314-.267-.565-.594-.565z"></svg:path><svg:path d="M1.645 3.061c-.33 0-.601.252-.601.565v11.808c0 .312.271.566.601.566h10.306l.006-12.939z"></svg:path></svg:g>`,
})
export class SiGlyphBagIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
