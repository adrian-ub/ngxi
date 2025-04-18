import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedWitchIcon],svg[token-branded-witch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedWitch0)" fill-rule="evenodd" d="M20.138 4.964a1.345 1.345 0 0 1 .742 1.811l-5.138 11.013a1.4 1.4 0 0 1-.832.969a1.484 1.484 0 0 1-1.912-.705L7.765 6.775a1.345 1.345 0 0 1 .741-1.811c.191-.08.387-.117.578-.117h5.726c.794 0 1.43.594 1.43 1.325c0 .73-.636 1.324-1.43 1.324h-3.533l3.05 6.579l3.9-8.407a1.483 1.483 0 0 1 1.906-.704zm-9.709.704a1.5 1.5 0 0 0-.185-.29h4.566c.476 0 .9.354.9.794s-.424.794-.9.794h-3.782zm4.216 9.095l4.11-8.872a.89.89 0 0 1 1.15-.424c.44.186.636.673.445 1.086l-4.767 10.223zM8.75 5.467c.44-.185.953.005 1.144.424l5.228 11.277c.196.418 0 .9-.445 1.086a.89.89 0 0 1-1.15-.424L8.3 6.553c-.19-.413.005-.9.45-1.086M3.12 7.051a1.346 1.346 0 0 1 .746-1.812a1.483 1.483 0 0 1 1.913.705l5.227 11.277a1.345 1.345 0 0 1-.741 1.811a1.484 1.484 0 0 1-1.918-.704L3.12 7.046zm.98-1.308a.89.89 0 0 1 1.149.423l5.228 11.277c.19.413-.005.9-.45 1.086c-.44.186-.954-.005-1.145-.424L3.654 6.828c-.195-.418 0-.9.445-1.085" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedWitch0" x1="3.58" x2="20.133" y1="7.046" y2="7.046" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#72F6FD"></svg:stop><svg:stop offset=".53" stop-color="#1B67FF"></svg:stop><svg:stop offset="1" stop-color="#8B3BEF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedWitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
