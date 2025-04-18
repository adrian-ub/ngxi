import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMviIcon],svg[token-branded-mvi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedMvi0)" d="M16.91 3a1.637 1.637 0 1 0 0 3.274a1.637 1.637 0 0 0 0-3.274M5.334 10.364C5.335 9.616 8.318 9 12 9s6.666.616 6.666 1.364c0 .752-3.339 1.363-6.666 1.363c-3.338 0-6.665-.6-6.665-1.363m-2.062.272s0 2.182 8.727 2.182s8.727-2.182 8.727-2.182c0 2.237-2.061 6.95-3.338 7.757c-.654.414-.845-.317-1.047-1.108c-.191-.741-.398-1.532-1.015-1.494c-.632.043-1.145 1.325-1.658 2.613C13.151 19.702 12.633 21 12 21s-1.146-1.31-1.658-2.607c-.524-1.32-1.037-2.635-1.68-2.597c-.606.044-.818.819-1.004 1.539c-.207.78-.393 1.489-1.058 1.063c-1.26-.807-3.327-5.514-3.327-7.762"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedMvi0" x1="17.638" x2="6.18" y1="5.015" y2="18.565" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3AFCE7"></svg:stop><svg:stop offset="1" stop-color="#FC5CDD"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedMviIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
