import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRubyIcon],svg[openmoji-ruby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiRuby0" d="m36 64.08l32-40.73l-11.62-11.37h-40L4 23.35z"></svg:path></svg:defs><svg:path fill="#d22f27" d="m61.711 61.715l-6.174-51.428l-16.256.177L10.997 38.75l-.714 16.794z"></svg:path><svg:path fill="#ea5a47" d="M61.45 59.516L46.875 18.95L24.87 24.875l14.411-14.41l16.256-.178z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" transform="rotate(-45.001 46.006 31.85)"><svg:use href="#openmojiRuby0"></svg:use><svg:path d="M55.75 23.86L36 64.08v-52.1L16.26 23.35m0 .51L36 64.08M4 23.35h64M36 11.98l19.75 11.37"></svg:path><svg:use href="#openmojiRuby0"></svg:use></svg:g>`,
})
export class OpenmojiRubyIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
