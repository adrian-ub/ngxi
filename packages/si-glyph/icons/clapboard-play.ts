import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphClapboardPlayIcon],svg[si-glyph-clapboard-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m.979 8.954l14.916-3.523l-.98-4.056L0 4.898zm11.508-3.597l-1.448-2.312l2.01-.486l1.449 2.312zm-3.35.81L7.688 3.855l2.009-.485l1.45 2.312zm-3.352.81L4.337 4.665l2.01-.485l1.449 2.312zm-3.349.81L.987 5.475l2.009-.485l1.449 2.312zM1 9.037v8h15v-8zm6.904 6.13v-4.25l3.232 2.169z"></svg:path>`,
})
export class SiGlyphClapboardPlayIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}
