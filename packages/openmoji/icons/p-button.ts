import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPButtonIcon],svg[openmoji-p-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07c0-.53.434-.965.965-.965h46.07c.53 0 .965.434.965.965v46.07c0 .53-.434.965-.965.965"></svg:path><svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07c0-.53.434-.965.965-.965h46.07c.53 0 .965.434.965.965v46.07c0 .53-.434.965-.965.965z"></svg:path><svg:path stroke-linecap="round" d="M30.11 47.005v-22h8.389a5.48 5.48 0 0 1 5.479 5.48h0a5.48 5.48 0 0 1-5.48 5.479H30.11"></svg:path></svg:g>`,
})
export class OpenmojiPButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
