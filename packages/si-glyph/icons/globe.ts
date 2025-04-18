import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphGlobeIcon],svg[si-glyph-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(3)"><svg:path d="M5.031 13.225v1.434c-2.154.083-3.936.613-3.936 1.26l.004.017l8.806.009s.005-.018.005-.025c0-.646-1.818-1.177-3.973-1.26v-1.48"></svg:path><svg:ellipse cx="5.012" cy="7.031" rx="5.012" ry="5.031"></svg:ellipse><svg:path d="M5.04 13.971a6.88 6.88 0 0 1-4.341-1.549a.5.5 0 0 1-.071-.697a.49.49 0 0 1 .69-.072a5.8 5.8 0 0 0 3.722 1.33c3.263 0 5.916-2.678 5.916-5.967c0-2.918-2.151-5.453-5.005-5.896a6 6 0 0 0-.911-.07a.493.493 0 0 1-.491-.494c0-.273.22-.495.491-.495q.53 0 1.061.081c3.328.518 5.837 3.475 5.837 6.875c0 3.834-3.094 6.954-6.898 6.954"></svg:path></svg:g>`,
})
export class SiGlyphGlobeIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
