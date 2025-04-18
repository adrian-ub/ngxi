import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBtsgIcon],svg[token-branded-btsg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedBtsg0)" d="M8.522 18.478V2H6.348v16.478c0 .265.221.478.495.478h1.183a.486.486 0 0 0 .496-.478m4.408-7.782c-.274 0-.495.243-.495.543v10.217c0 .3.221.544.495.544h1.183c.274 0 .496-.244.496-.544V11.24c0-.3-.222-.543-.496-.543zM9.887 12c-.274 0-.496.24-.496.54v8.486c0 .3.222.54.496.54h1.182c.274 0 .496-.24.496-.54V12.54c0-.3-.222-.539-.496-.539zm5.591.983c0-.305.222-.548.496-.548h1.182c.274 0 .496.243.496.548v7.165c0 .304-.222.548-.496.548h-1.182c-.274 0-.496-.244-.496-.548z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedBtsg0" x1="12" x2="12" y1="2" y2="22" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9F559B"></svg:stop><svg:stop offset="1" stop-color="#F70762"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedBtsgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
