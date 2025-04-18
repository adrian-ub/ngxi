import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAxelIcon],svg[token-branded-axel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedAxel0)" d="M12.7 3.429a.782.782 0 0 0-1.395 0l-3.933 7.86l3.736 1.963l3.286-6.436zm2.442 4.878l-2.847 5.57l7.635 4.006zm5.807 11.635l-9.272-4.872L8.655 21h11.562a.788.788 0 0 0 .732-1.058M7.147 21l3.348-6.55l-3.725-1.957l-3.685 7.37A.787.787 0 0 0 3.783 21z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedAxel0" x1="7.952" x2="20.454" y1="11.998" y2="18.918" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0642DE"></svg:stop><svg:stop offset="1" stop-color="#0F36AF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedAxelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
