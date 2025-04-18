import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDoorIcon],svg[si-glyph-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m4.083.041l6.959 2.667v12.084l-6.709-1.709l-.208.834l7.803 2v-2.042l1.968-.001V.041z"></svg:path><svg:path d="M9 8h.875v.875H9z"></svg:path></svg:g>`,
})
export class SiGlyphDoorIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
