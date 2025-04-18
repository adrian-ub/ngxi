import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPersonCheckedIcon],svg[si-glyph-person-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.926 4.121c0 1.68-1.309 4.891-2.922 4.891S5.081 5.801 5.081 4.121s1.31-3.04 2.923-3.04s2.922 1.36 2.922 3.04m-1.893 8.675l2.393-2.421l1.279 1.335l1.643-1.662c-.631-.65-1.405-.998-2.669-.998c-.854 1.156-3.689 1.453-3.689 1.453s-2.899-.285-3.753-1.427c-4.093 0-4.217 5.91-4.217 5.91h11.1z"></svg:path><svg:path d="m15.094 10.801l-2.381 2.381l-1.416-1.417l-.925.924l2.342 2.341l3.306-3.304z"></svg:path></svg:g>`,
})
export class SiGlyphPersonCheckedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
