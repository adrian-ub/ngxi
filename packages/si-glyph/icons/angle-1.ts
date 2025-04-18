import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphAngle1Icon],svg[si-glyph-angle-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(2 1)"><svg:ellipse cx="13.479" cy="13.458" rx="1.479" ry="1.458"></svg:ellipse><svg:ellipse cx="13.479" cy="9.458" rx="1.479" ry="1.458"></svg:ellipse><svg:ellipse cx="9.479" cy="13.458" rx="1.479" ry="1.458"></svg:ellipse><svg:ellipse cx="5.479" cy="13.458" rx="1.479" ry="1.458"></svg:ellipse><svg:ellipse cx="9.479" cy="9.458" rx="1.479" ry="1.458"></svg:ellipse><svg:ellipse cx="13.479" cy="5.458" rx="1.479" ry="1.458"></svg:ellipse><svg:ellipse cx="13.479" cy="1.458" rx="1.479" ry="1.458"></svg:ellipse><svg:ellipse cx="9.479" cy="5.458" rx="1.479" ry="1.458"></svg:ellipse><svg:ellipse cx="5.479" cy="9.458" rx="1.479" ry="1.458"></svg:ellipse><svg:ellipse cx="1.479" cy="13.458" rx="1.479" ry="1.458"></svg:ellipse></svg:g>`,
})
export class SiGlyphAngle1Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
