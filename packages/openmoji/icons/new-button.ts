import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiNewButtonIcon],svg[openmoji-new-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07c0-.53.434-.965.965-.965h46.07c.53 0 .965.434.965.965v46.07c0 .53-.434.965-.965.965"></svg:path><svg:g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><svg:path d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07c0-.53.434-.965.965-.965h46.07c.53 0 .965.434.965.965v46.07c0 .53-.434.965-.965.965z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37.486 32.47h-4.572v8h4.572m-4.572-4h3.429M23 40.47v-8l5.714 8v-8m21.286 0l-2.286 8l-2.285-8l-2.286 8l-2.286-8"></svg:path></svg:g>`,
})
export class OpenmojiNewButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
