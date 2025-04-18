import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPersonPlusIcon],svg[si-glyph-person-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.985 3.044c0 1.671-1.336 4.863-2.983 4.863S5.016 4.715 5.016 3.044c0-1.669 1.338-3.023 2.986-3.023c1.647 0 2.983 1.354 2.983 3.023m4.973 9.977h-1.982v-1.983h-.972v1.983h-1.983v.971h1.983v1.983h.972v-1.983h1.982z"></svg:path><svg:path d="M14.861 9.938c-.663-1.037-1.666-1.908-3.158-1.908c-.854 1.159-3.692 1.456-3.692 1.456S5.108 9.2 4.252 8.056c-4.096 0-4.221 5.923-4.221 5.923h9.906v-1.996h2.031V9.938z"></svg:path></svg:g>`,
})
export class SiGlyphPersonPlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
