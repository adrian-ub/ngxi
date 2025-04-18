import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorTncIcon],svg[cryptocurrency-color-tnc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#ff439b" fill-rule="nonzero"></svg:circle><svg:path fill="#fff" d="m18.226 13.804l5.633 9.696H8.245l1.871-3.103l8.412.002l-2.132-3.48zm-5.75 2.256l5.727-9.52L26 19.667h-3.744l-4.12-7.16l-2.001 3.554zm4.885 3.619L6 19.625L13.807 6.5l1.86 3.146l-4.303 6.918h4.167z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorTncIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
