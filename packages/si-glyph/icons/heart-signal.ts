import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphHeartSignalIcon],svg[si-glyph-heart-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m9.953 8.107l-1.304 2.385a.33.33 0 0 1-.331.17a.33.33 0 0 1-.287-.23l-.975-3.316l-1.213 3.946a.33.33 0 0 1-.317.242h-.009a.33.33 0 0 1-.319-.229L3.44 5.447L2.303 7.933c-.058.106-.126.219-.251.219H.492c1.686 4.589 7.555 6.897 7.555 6.897s5.845-2.295 7.511-6.942z"></svg:path><svg:path d="m1.801 6.945l1.425-3.108a.33.33 0 0 1 .328-.181a.34.34 0 0 1 .29.238l1.647 5.511l1.221-4.16a.33.33 0 0 1 .319-.253h.004c.15 0 .283.1.323.244l1.089 3.868l1.007-1.928c.058-.11.173-.231.296-.231h6.006A7.6 7.6 0 0 0 16 5.044a4.03 4.03 0 0 0-7.963-.882A4.072 4.072 0 0 0 0 5.086c0 .672.09 1.256.244 1.859z"></svg:path></svg:g>`,
})
export class SiGlyphHeartSignalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
