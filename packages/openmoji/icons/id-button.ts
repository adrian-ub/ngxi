import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiIdButtonIcon],svg[openmoji-id-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07c0-.53.434-.965.965-.965h46.07c.53 0 .965.434.965.965v46.07c0 .53-.434.965-.965.965"></svg:path><svg:g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><svg:path d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07c0-.53.434-.965.965-.965h46.07c.53 0 .965.434.965.965v46.07c0 .53-.434.965-.965.965z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31.466 30.875v10m8.599-.019H36.42v-9.962h3.644a2.08 2.08 0 0 1 2.08 2.08v5.803a2.08 2.08 0 0 1-2.08 2.08"></svg:path></svg:g>`,
})
export class OpenmojiIdButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
