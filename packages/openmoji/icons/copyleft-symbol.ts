import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCopyleftSymbolIcon],svg[openmoji-copyleft-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="26.68" fill="#fff" fill-rule="evenodd"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-miterlimit="10" stroke-width="8.693" d="M28.98 48.48a10.83 10.83 0 0 0 7.212 2.734c5.999 0 10.87-4.865 10.87-10.87v-8.693v8.693v-8.693c0-6.003-4.869-10.87-10.87-10.87a10.84 10.84 0 0 0-7.212 2.734" clip-rule="evenodd"></svg:path><svg:circle cx="36" cy="36" r="26.68" stroke-width="4.74"></svg:circle></svg:g>`,
})
export class OpenmojiCopyleftSymbolIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
