import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAlcxIcon],svg[token-branded-alcx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#fff" d="M21 3H3v18h18z"></svg:path><svg:path fill="url(#tokenBrandedAlcx0)" d="M3 3h18v18H3z"></svg:path><svg:path fill="#ECBE9D" fill-rule="evenodd" d="M12 17.786a5.784 5.784 0 0 0 4.092-9.876A5.785 5.785 0 1 0 12 17.786m0-.321a5.464 5.464 0 1 0 0-10.929a5.464 5.464 0 0 0 0 10.929" clip-rule="evenodd"></svg:path><svg:path fill="#ECBE9D" d="M11.862 7.573V6.48h.321v1.093l3.674 2.925v2.916l-.62.514l.736 1.286h-2.372l-1.575 1.298l-1.626-1.298H8.143l.675-1.257l-.675-.543v-2.919l3.719-2.925zm.16.28l-3.461 2.726l1.433 1.15l2.032-3.432l1.983 3.48l1.434-1.198zm3.514 3.066l-1.363 1.141l.903 1.588l.46-.385zm-5.29 1.013l1.937 1.559v1.401h3.237l-3.4-5.956zm1.937 3.282v.752l.913-.752zm-.321.758v-2.327l-3.398-2.732v2.35zM9.075 14.16l-.395.733H10z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedAlcx0" x1="6.349" x2="24.905" y1="6.121" y2="27.435" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1A1E21"></svg:stop><svg:stop offset="1" stop-color="#06060A"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedAlcxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
