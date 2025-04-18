import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedGswiftIcon],svg[token-branded-gswift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedGswift0)" d="M3 16.948L8.625 10.9l1.125.55l-1.688 1.925l3.097-1.377l1.403.824z"></svg:path><svg:path fill="#fff" d="m21 16.95l-5.063-5.225L18.75 10.2l-3.375-3.15h-6.75L5.25 10.2zm-11.813-9h5.625l1.972 1.85l-1.972.823L13.8 9.75H9.75l2.475.9h1.125l2.587 2.727l-8.72-3.578z"></svg:path><svg:path fill="#E9E9E9" fill-opacity=".6" d="m16.361 11.517l-1.026-1.111l-.522.216l-.315-.302l1.44 1.404z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedGswift0" x1="16.24" x2="6.136" y1="7.947" y2="17.665" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFA902"></svg:stop><svg:stop offset="1" stop-color="#FFF000"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedGswiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
