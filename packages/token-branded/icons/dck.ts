import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDckIcon],svg[token-branded-dck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedDck0)" d="m17.714 8.176l-.018.005l-8.66 8.836a1.247 1.247 0 0 1-1.787.01L3.44 13.17c-.932-.935-.28-2.52 1.02-2.52h2.192c.382 0 .751.15 1.03.42l2.025 1.947l-1.035 1.125l-2.025-1.917H4.59l3.55 3.528l8.494-8.693a1.5 1.5 0 0 1 1.08-.459h1.647c1.462 0 2.191 1.818 1.147 2.875l-7.45 7.528a1.32 1.32 0 0 1-1.899-.018l-.509-.527l1.08-1.084l.387.405l7.334-7.38c.081-.08.023-.225-.09-.225H17.71z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedDck0" x1="20.985" x2="3.002" y1="8.244" y2="8.244" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#097CB8"></svg:stop><svg:stop offset="1" stop-color="#8ADECF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedDckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
