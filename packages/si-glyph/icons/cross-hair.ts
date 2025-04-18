import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCrossHairIcon],svg[si-glyph-cross-hair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.5 1C4.364 1 1 4.361 1 8.492s3.364 7.492 7.5 7.492S16 12.623 16 8.492S12.637 1 8.5 1m.469 13.945v-1.898h-.938v1.898A6.46 6.46 0 0 1 2.056 9h1.912V8H2.056a6.46 6.46 0 0 1 5.943-5.943v1.928h.969v-1.93A6.46 6.46 0 0 1 14.943 8h-1.928v.969h1.93a6.46 6.46 0 0 1-5.976 5.976"></svg:path><svg:path d="M8.984 6.021h-.941v2.021H6.031v.942h2.012v1.975h.941V8.984h1.954v-.942H8.984z"></svg:path></svg:g>`,
})
export class SiGlyphCrossHairIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
