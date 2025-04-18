import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphEyeDropIcon],svg[si-glyph-eye-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.661 4.051c.234-1.077-.051-2.229-.86-3.046c-1.29-1.299-3.422-1.26-4.76.089S.663 4.589 1.954 5.889c.81.816 1.951 1.103 3.023.868l.602.586l-.58.583l.502.506l.546-.552l5.062 5.073h2.875v-2.766L8.777 5.129l.528-.533l-.5-.505l-.555.559zm5.355 6.371l.005 1.623l-1.804.009l-4.545-4.71l1.547-1.625zm2.969 4.418c0 .619-.44 1.122-.986 1.122c-.545 0-.985-.503-.985-1.122s.985-1.777.985-1.777s.986 1.157.986 1.777"></svg:path>`,
})
export class SiGlyphEyeDropIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
