import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedNaviIcon],svg[token-branded-navi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedNavi0)" d="M7.934 13.96L3.87 18.533V5.308a2.032 2.032 0 0 1 4.064 0z"></svg:path><svg:path fill="url(#tokenBrandedNavi1)" d="m7.788 10.693l-.18-6.496L18.82 17.714a1.99 1.99 0 0 1-.288 2.833a2.046 2.046 0 0 1-2.85-.294z"></svg:path><svg:path fill="#FFC524" d="m3.874 18.377l4.065-4.825v5.416a2.032 2.032 0 1 1-4.065 0z"></svg:path><svg:path fill="#91D450" d="m3.874 5.949l4.065 4.971V5.308a2.032 2.032 0 1 0-4.065 0z"></svg:path><svg:path fill="#FF7819" d="M19.929 6.88c.133-.33.202-.685.202-1.042C20.13 4.271 18.83 3 17.227 3s-2.903 1.27-2.903 2.838c0 .349.063.683.181.991c.55 1.803 1.989 3.205 2.707 3.72c1.602-1.18 2.396-2.68 2.717-3.669"></svg:path><svg:path fill="#AC46BC" d="M17.227 7.065a1.162 1.162 0 1 0 .001-2.323a1.162 1.162 0 0 0 0 2.323"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedNavi0" x1="20.131" x2="3.887" y1="12.499" y2="11.94" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5DC17C"></svg:stop><svg:stop offset="1" stop-color="#8CD037"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedNavi1" x1="3.868" x2="14.423" y1="6.259" y2="23.395" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9CD863"></svg:stop><svg:stop offset="1" stop-color="#49ADDA"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedNaviIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
