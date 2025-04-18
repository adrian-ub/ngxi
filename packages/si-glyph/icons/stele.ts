import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphSteleIcon],svg[si-glyph-stele-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M1 14v1.99h15.003V14zm10-8h.905v.898H11zM5 6h.951v.905H5z"></svg:path><svg:path d="M2 5.412v7.589h13V5.412C14.999.068 10.014.024 8.06.024S2 .068 2 5.412m4.967 4.574H5.894V7.954h-.887v2.003h-1.04V4.986h2.986v2.028H6.02v.86h.947zm1.986-.032h-1v-5h1zm2.085-1.958v1.958H10v-5h2.995L13 7.984z"></svg:path></svg:g>`,
})
export class SiGlyphSteleIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
