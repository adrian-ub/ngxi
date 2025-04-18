import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLinaIcon],svg[token-branded-lina-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedLina0)" d="M4.638 14.548a2.22 2.22 0 0 1 0-3.119L12.977 3l.389.393a2.22 2.22 0 0 1 0 3.118l-8.34 8.43z"></svg:path><svg:path fill="url(#tokenBrandedLina1)" d="M7.635 17.578a2.22 2.22 0 0 1 0-3.118l8.339-8.43l.388.394a2.22 2.22 0 0 1 0 3.118l-8.338 8.43z"></svg:path><svg:path fill="url(#tokenBrandedLina2)" d="M10.634 17.489a2.22 2.22 0 0 0 0 3.118l.39.393l8.338-8.43a2.22 2.22 0 0 0 0-3.117l-.388-.393z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedLina0" x1="10.455" x2="22.52" y1="10.529" y2="23.189" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6BB7FF"></svg:stop><svg:stop offset="1" stop-color="#053BF7"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedLina1" x1="5.661" x2="17.726" y1="5.962" y2="18.623" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6BB7FF"></svg:stop><svg:stop offset="1" stop-color="#053BF7"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedLina2" x1="8.038" x2="16.05" y1="7.994" y2="15.919" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6BB7FF"></svg:stop><svg:stop offset="1" stop-color="#053BF7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedLinaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
