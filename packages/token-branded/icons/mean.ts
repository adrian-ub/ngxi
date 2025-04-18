import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMeanIcon],svg[token-branded-mean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedMean0)" fill-rule="evenodd" d="M20.438 3L12 5.25L3.563 3C3.563 4.901 3 6.937 3 6.937l3.589 9.833l5.41 4.23l5.412-4.23L21 6.937c-.056 0-.562-2.036-.562-3.937M12 6.937L5.25 5.25c0 1.66-.371 2.12-.371 2.12l3.183 8.286l1.688 1.406L6.937 7.5l3.375 1.125l1.125 8.719L12 18.75l.563-1.406l1.124-8.719L17.063 7.5l-2.813 9.563l1.687-1.407l3.184-8.285s-.371-.71-.371-2.121z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedMean0" x1="12" x2="12" y1="3.563" y2="20.437" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F40315"></svg:stop><svg:stop offset="1" stop-color="#B8091C"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedMeanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
