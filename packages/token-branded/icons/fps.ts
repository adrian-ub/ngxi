import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedFpsIcon],svg[token-branded-fps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedFps0)" d="M11.849 9.502a1.2 1.2 0 0 1-.54-.365q-.765-.898-1.815-2.18c-.575-.704-1.26-1.404-2.22-1.454a2.945 2.945 0 0 0-3.114 2.55c-.35 2.12-.7 4.24-1.035 6.359q-.1.537-.125 1.085a2.99 2.99 0 0 0 3.02 2.99a3.015 3.015 0 0 0 2.864-2.675h-.01l-.01-.005a2.09 2.09 0 0 1-.7-4.01c.985-.42 2.07.04 2.55 1.01c.149.377.225.78.225 1.185l.015.01h1.95c.02 0 .03-.01.04-.02a.06.06 0 0 0 .02-.04c.05-1.135.785-2.28 1.95-2.315a2.02 2.02 0 0 1 1.845 1.17c.59 1.3-.2 2.83-1.605 2.985c-.035 0-.05.025-.05.06c.255 1.665 1.65 2.86 3.314 2.634a3.01 3.01 0 0 0 2.502-2.287a3 3 0 0 0 .038-1.192c-.32-2.05-.7-4.395-1.14-7.024a2.94 2.94 0 0 0-3.175-2.45c-.924.075-1.694.86-2.26 1.555l-.424.525q-.62.788-1.28 1.544c-.215.24-.49.42-.825.36z"></svg:path><svg:path fill="url(#tokenBrandedFps1)" d="M8.899 14.847a1.15 1.15 0 0 0 1.13-1.16a1.15 1.15 0 0 0-1.13-1.16a1.145 1.145 0 0 0-1.13 1.16a1.146 1.146 0 0 0 1.13 1.16"></svg:path><svg:path fill="url(#tokenBrandedFps2)" d="M16.099 13.683a1.15 1.15 0 0 1-1.13 1.16a1.15 1.15 0 0 1-1.13-1.16a1.15 1.15 0 0 1 1.13-1.155a1.15 1.15 0 0 1 1.13 1.154"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedFps0" x1="3.69" x2="20.623" y1="11.562" y2="11.617" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#AA32F2"></svg:stop><svg:stop offset="1" stop-color="#8760FB"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedFps1" x1="-29.493" x2="105.377" y1=".086" y2=".709" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#AA32F2"></svg:stop><svg:stop offset="1" stop-color="#8760FB"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedFps2" x1="3.689" x2="20.623" y1="11.563" y2="11.618" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#AA32F2"></svg:stop><svg:stop offset="1" stop-color="#8760FB"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedFpsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
