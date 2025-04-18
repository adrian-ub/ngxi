import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphLavaboIcon],svg[si-glyph-lavabo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M13.969 5.021H4.031c0 1.643 2.489 3.646 4.866 3.893l-.849 5.697c0 .738.548 1.386 1.286 1.386h3.299c.738 0 1.336-.598 1.336-1.336z"></svg:path><svg:path d="M12.062 5.027V1.523c0-.396-.219-.537-.607-.537h-1.09l-.412.967l-.911-.284l.653-1.328a.49.49 0 0 1 .448-.296h1.499c.789 0 1.299.459 1.299 1.168v3.814z"></svg:path><svg:path d="M11 3h1.223v.937H11z"></svg:path></svg:g>`,
})
export class SiGlyphLavaboIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
