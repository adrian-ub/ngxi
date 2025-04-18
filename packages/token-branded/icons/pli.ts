import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPliIcon],svg[token-branded-pli-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedPli0)" d="M6.727 12.002A7.04 7.04 0 0 1 3 11.022c.44-.333 1.8-1 3.727-1a8.4 8.4 0 0 1 4.024 1.005a8.8 8.8 0 0 1-4.024.975"></svg:path><svg:path fill="url(#tokenBrandedPli1)" d="M7.982 9.585A5.2 5.2 0 0 1 5.86 7.31a4.8 4.8 0 0 1 3.013.714a6.13 6.13 0 0 1 2.313 2.415c-.529.031-1.916-.096-3.203-.847z"></svg:path><svg:path fill="url(#tokenBrandedPli2)" d="M9.882 7.913a3.9 3.9 0 0 1-.45-2.266c.302.106 1.213.636 1.748 1.573c.529.942.434 1.842.402 2.213c-.334-.175-1.186-.604-1.705-1.52z"></svg:path><svg:path fill="url(#tokenBrandedPli3)" d="M17.273 12.002a7.04 7.04 0 0 0 3.727-.98c-.44-.333-1.8-1-3.727-1a8.4 8.4 0 0 0-4.024 1.005c.561.318 2.155.975 4.024.975"></svg:path><svg:path fill="url(#tokenBrandedPli4)" d="M16.018 9.585a5.2 5.2 0 0 0 2.123-2.276a4.8 4.8 0 0 0-3.012.714a6.14 6.14 0 0 0-2.314 2.415c.53.031 1.917-.096 3.203-.847z"></svg:path><svg:path fill="url(#tokenBrandedPli5)" d="M14.118 7.913c.524-.91.497-1.937.45-2.266c-.302.106-1.213.636-1.748 1.573c-.529.942-.434 1.842-.402 2.213c.334-.175 1.186-.604 1.705-1.52z"></svg:path><svg:path fill="#FEFEFE" d="M3 15.705v2.647h1.588v-1.059h2.98c.986 0 1.785-1.038 1.785-2.118s-.8-2.117-1.784-2.117H4.016L3 14.646h4.257c.296 0 .508.206.508.53c0 .322-.212.529-.508.529zm8.47 2.647v-5.294h1.589v3.706h3.706l-.985 1.588z"></svg:path><svg:path fill="#FE620D" d="M18.883 18.352v-5.294h1.588v5.294z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPli0" x1="5.533" x2="17.287" y1="11.998" y2="11.998" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F36511"></svg:stop><svg:stop offset="1" stop-color="#FFDF1A"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPli1" x1="5.201" x2="18.757" y1="5.606" y2="13.399" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F36511"></svg:stop><svg:stop offset="1" stop-color="#FFDF1A"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPli2" x1="5.472" x2="8.261" y1="6.803" y2="20.519" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F36511"></svg:stop><svg:stop offset="1" stop-color="#FFDF1A"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPli3" x1="18.467" x2="6.713" y1="11.998" y2="11.998" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F36511"></svg:stop><svg:stop offset="1" stop-color="#FFDF1A"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPli4" x1="18.799" x2="5.244" y1="5.606" y2="13.399" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F36511"></svg:stop><svg:stop offset="1" stop-color="#FFDF1A"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPli5" x1="18.512" x2="15.72" y1="6.803" y2="20.518" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F36511"></svg:stop><svg:stop offset="1" stop-color="#FFDF1A"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPliIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
