import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphMagnifier2Icon],svg[si-glyph-magnifier-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M16.025 7.5c0-4.143-3.356-7.5-7.499-7.5a7.5 7.5 0 0 0-7.499 7.5a7.5 7.5 0 0 0 7.5 7.5c2.219 0 7.5-.052 7.5-.052zm-7.553 5.529a5.506 5.506 0 1 1 .002-11.012a5.506 5.506 0 0 1-.002 11.012m6.487.929h-1v-1h1z"></svg:path><svg:path d="M7.844 3.044c-2.119 0-3.839 1.616-3.839 3.608c0 .25.026.496.077.73c.186.84.529.691.529-.158c0-1.998 1.719-3.609 3.84-3.609c.905 0 .608-.571-.607-.571"></svg:path></svg:g>`,
})
export class SiGlyphMagnifier2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
