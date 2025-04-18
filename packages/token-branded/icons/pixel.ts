import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPixelIcon],svg[token-branded-pixel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedPixel0)" d="M7.8 16.2h4.8V21H7.8z"></svg:path><svg:path fill="url(#tokenBrandedPixel1)" d="M12.6 3h1.878C18.078 3 21 5.922 21 9.528c0 3.6-2.922 6.672-6.528 6.672H7.8v-9h4.8v4.2h1.878c1.182 0 2.322-.918 2.322-2.1s-1.14-2.1-2.328-2.1H12.6z"></svg:path><svg:path fill="url(#tokenBrandedPixel2)" d="M3 11.401h4.8v4.8H3z"></svg:path><svg:path fill="url(#tokenBrandedPixel3)" d="M7.8 11.401h4.8v4.8H7.8z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPixel0" x1="3" x2="21" y1="8.4" y2="15.983" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3EFF6E"></svg:stop><svg:stop offset="1" stop-color="#16DDDE"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPixel1" x1="3.205" x2="22.547" y1="7.868" y2="16.606" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF5B3C"></svg:stop><svg:stop offset="1" stop-color="#FF3196"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPixel2" x1="3" x2="21" y1="8.401" y2="15.984" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F3F"></svg:stop><svg:stop offset="1" stop-color="#FFC546"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPixel3" x1="7.8" x2="12.6" y1="12.841" y2="14.863" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E059FE"></svg:stop><svg:stop offset="1" stop-color="#656FFF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPixelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
