import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiVsButtonIcon],svg[openmoji-vs-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07c0-.53.434-.965.965-.965h46.07c.53 0 .965.434.965.965v46.07c0 .53-.434.965-.965.965"></svg:path><svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07c0-.53.434-.965.965-.965h46.07c.53 0 .965.434.965.965v46.07c0 .53-.434.965-.965.965z"></svg:path><svg:path stroke-linecap="round" d="M44.168 33.244c-.293-1.138-1.557-1.994-3.073-1.994h0c-1.733 0-3.137 1.118-3.137 2.497s1.404 2.498 3.137 2.498l-.064.01c1.733 0 3.137 1.117 3.137 2.497s-1.404 2.498-3.137 2.498h0c-1.516 0-2.78-.856-3.073-1.995m-2.726-7.996l-2.854 9.991l-2.855-9.991"></svg:path></svg:g>`,
})
export class OpenmojiVsButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
