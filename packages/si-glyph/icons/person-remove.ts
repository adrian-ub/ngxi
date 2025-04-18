import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPersonRemoveIcon],svg[si-glyph-person-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.985 4.044c0 1.671-1.336 4.863-2.983 4.863S5.016 5.715 5.016 4.044c0-1.669 1.338-3.023 2.986-3.023c1.647 0 2.983 1.354 2.983 3.023m-1.047 8.938h5.823c-.447-1.584-1.593-3.953-4.058-3.953c-.854 1.159-3.692 1.456-3.692 1.456s-2.903-.286-3.759-1.43c-4.096 0-4.221 5.923-4.221 5.923h9.906z"></svg:path><svg:path d="M11 14h4.937v.972H11z"></svg:path></svg:g>`,
})
export class SiGlyphPersonRemoveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
