import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiChromiumIcon],svg[openmoji-chromium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="28" fill="#92D3F5"></svg:circle><svg:path fill="#92D3F5" fill-rule="evenodd" d="m34.312 27.158l.008.047a9 9 0 0 1 9.327 13.369L30.386 63.542C41.828 65.821 53.943 60.74 60.1 50.074c4.21-7.291 4.767-15.688 2.24-23.074H36q-.867.001-1.688.158" clip-rule="evenodd"></svg:path><svg:path fill="#61B2E4" fill-rule="evenodd" d="M27 43.5L8.202 32.617C9.872 18.748 21.681 8 36 8c12.316 0 22.774 7.951 26.522 19H36a9 9 0 0 0-6.914 14.762z" clip-rule="evenodd"></svg:path><svg:circle cx="36" cy="36" r="9" fill="#61B2E4"></svg:circle><svg:g fill="none" stroke="#000" stroke-width="2"><svg:circle cx="36" cy="36" r="10"></svg:circle><svg:path stroke-linecap="round" d="m44.66 41l-11.5 19.919M11.081 33.16L31 44.66M36 26h23"></svg:path><svg:circle cx="36" cy="36" r="28"></svg:circle></svg:g>`,
})
export class OpenmojiChromiumIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
