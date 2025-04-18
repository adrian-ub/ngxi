import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosDivshotIcon],svg[logos-divshot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient x1="0%" y1="50%" x2="100%" y2="50%" id="ssvg-id-divshota"><svg:stop stop-color="#F5EA14" offset=".54%"></svg:stop><svg:stop stop-color="#F05B26" offset="100%"></svg:stop></svg:lineargradient><svg:lineargradient x1="0%" y1="50%" x2="100%" y2="50%" id="ssvg-id-divshotb"><svg:stop stop-color="#FF0" offset="22%"></svg:stop><svg:stop stop-color="#FF8E00" offset="100%"></svg:stop></svg:lineargradient><svg:lineargradient x1="0%" y1="50%" x2="99.999%" y2="50%" id="ssvg-id-divshotc"><svg:stop stop-color="#FF0" offset="0%"></svg:stop><svg:stop stop-color="#FF8E00" offset="100%"></svg:stop></svg:lineargradient><svg:lineargradient x1="0%" y1="50%" x2="100%" y2="50%" id="ssvg-id-divshotd"><svg:stop stop-color="#FF0" offset="0%"></svg:stop><svg:stop stop-color="#FF8E00" offset="100%"></svg:stop></svg:lineargradient></svg:defs><svg:path d="M83.627 0L0 114.347l83.627 112.64H170.667L256 114.347L170.667 0H83.627zm73.386 114.347L128 153.6l-29.013-39.253L128 75.093l29.013 39.254z" fill="url(#ssvg-id-divshota)"></svg:path><svg:path d="M128 0l27.307 39.253l-56.32 75.094l56.32 77.076l-28.16 35.564l-82.774-112.64L128 0z" fill="url(#ssvg-id-divshotb)"></svg:path><svg:path d="M145.067 191.147h-44.374l56.32-76.8h44.38l-56.326 76.8z" fill="url(#ssvg-id-divshotc)"></svg:path><svg:path d="M100.693 191.147l-56.32-76.8H0l83.627 112.64H170.667l-25.6-35.84h-44.374z" opacity=".7" fill="url(#ssvg-id-divshotd)"></svg:path><svg:path d="M201.387 114.347l-56.32-76.8h-44.374l56.32 76.8h44.374z" opacity=".3" fill="url(#ssvg-id-divshotd)"></svg:path><svg:path d="M83.627 0L0 114.347h44.373l56.32-76.8h44.374L170.667 0H83.627z" fill="url(#ssvg-id-divshotd)"></svg:path><svg:path d="M170.667 0L256 114.347l-85.333 112.64l-25.6-35.84l56.326-76.8l-56.326-76.8L170.667 0z" fill="url(#ssvg-id-divshotd)"></svg:path>`,
})
export class LogosDivshotIcon {
  readonly viewBox = input("0 0 256 227")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
