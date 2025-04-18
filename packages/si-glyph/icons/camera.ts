import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCameraIcon],svg[si-glyph-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(.995 2.98)"><svg:circle cx="7.958" cy="6.958" r="2.958"></svg:circle><svg:path d="M14.666 2.042h-3.713L9.937.031H6L5 2.042H1.333C.597 2.042 0 2.639 0 3.375v7.25c0 .736.597 1.334 1.333 1.334h13.333c.736 0 1.334-.598 1.334-1.334v-7.25c0-.736-.598-1.333-1.334-1.333M6.953.969h2.094v1.062H6.953zm1.049 10.064a4.05 4.05 0 0 1-4.055-4.048a4.05 4.05 0 0 1 4.055-4.048a4.05 4.05 0 0 1 4.055 4.048a4.05 4.05 0 0 1-4.055 4.048M14 4.031h-2.047V2.969H14z"></svg:path></svg:g>`,
})
export class SiGlyphCameraIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
