import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiDimButtonIcon],svg[openmoji-dim-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="5" fill="#fcea2b"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="36" cy="36" r="5"></svg:circle><svg:path d="M36 26.087V24m7.01 4.99l1.475-1.475M45.913 36H48m-4.99 7.01l1.475 1.475M36 45.913V48m-7.01-4.99l-1.475 1.475M26.087 36H24m4.99-7.01l-1.475-1.475"></svg:path></svg:g>`,
})
export class OpenmojiDimButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
