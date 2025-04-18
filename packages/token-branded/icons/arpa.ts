import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedArpaIcon],svg[token-branded-arpa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#5A5967" d="M3.967 19.875L3 18.188h14.152L12 9.165l.95-1.67l7.054 12.38z"></svg:path><svg:path fill="url(#tokenBrandedArpa0)" d="M12.945 4.125L5.87 16.5H7.8l5.146-9l7.06 12.375L21 18.17z"></svg:path><svg:path fill="url(#tokenBrandedArpa1)" d="m3 18.187l8.078-14.062h1.873L5.863 16.5h10.328l.961 1.687z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedArpa0" x1="13.086" x2="13.451" y1="4.147" y2="19.425" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#CBCCCD"></svg:stop><svg:stop offset="1" stop-color="#939493"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedArpa1" x1="12.157" x2="3.456" y1="4.125" y2="18.12" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#DCEBF5"></svg:stop><svg:stop offset="1" stop-color="#B9C6CC"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedArpaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
