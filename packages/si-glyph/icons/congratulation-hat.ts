import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCongratulationHatIcon],svg[si-glyph-congratulation-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8 13.099L4.125 10.64v3.154s0 .548.355.633c1.114.264 2.279.516 3.52.516c1.27 0 2.485-.191 3.604-.543c.271-.058.271-.551.271-.551V10.64zM1.246 8.066h-.48C.355 9.63.052 14.603.052 14.912q.002.043.013.084h1.883a.4.4 0 0 0 .011-.084c-.001-.308-.305-5.281-.713-6.846"></svg:path><svg:path d="M8 1.062L0 6.043l1.33.999l5.555-1.258c.092-.529.528-.941 1.084-.941a1.125 1.125 0 0 1 0 2.25a1.07 1.07 0 0 1-.783-.352L2.374 7.83L8 11.702l8-5.659z"></svg:path></svg:g>`,
})
export class SiGlyphCongratulationHatIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
