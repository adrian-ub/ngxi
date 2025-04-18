import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCrownIcon],svg[openmoji-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="M4 51.624h64v7.267H4z"></svg:path><svg:circle cx="35.996" cy="16.008" r="5" fill="#FFF"></svg:circle><svg:path fill="#F1B31C" d="M4 51.624h64v7.267H4z"></svg:path><svg:path fill="#FCEA2B" d="M7 11a5 5 0 0 1 0 10m58 0a5 5 0 0 1 0-10"></svg:path><svg:path fill="#FCEA2B" d="M64.967 17.495c0 9.08-7.361 16.442-16.442 16.442h-.287c-9.081 0-11.443-7.361-11.443-16.443h-2.074c0 9.082-2.361 16.443-11.442 16.443h.164a16.42 16.42 0 0 1-13.042-6.427A16.37 16.37 0 0 1 7 17.494V11v40.624h58V11"></svg:path><svg:circle cx="35.996" cy="16.008" r="5" fill="#FCEA2B"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M4 51.624h64v7.267H4zM7 11v40.624h58V11"></svg:path><svg:path d="M7 11a5 5 0 0 1 0 10"></svg:path><svg:path d="M23.443 33.937a16.42 16.42 0 0 1-13.042-6.427A16.37 16.37 0 0 1 7 17.494m57.967.001c0 9.08-7.361 16.442-16.442 16.442"></svg:path><svg:circle cx="35.996" cy="16.008" r="5"></svg:circle><svg:path d="M65 21a5 5 0 0 1 0-10M4 51.624h64v7.267H4zM7 11a5 5 0 0 1 0 10"></svg:path><svg:path d="M65 21a5 5 0 0 1 0-10"></svg:path><svg:path d="M34.597 20.874c-.588 7.46-3.396 13.063-11.318 13.063h.164a16.42 16.42 0 0 1-13.042-6.427A16.37 16.37 0 0 1 7 17.494V11v40.624h58V11"></svg:path><svg:path d="M64.967 17.495c0 9.08-7.361 16.442-16.442 16.442h-.287c-7.906 0-10.72-5.58-11.315-13.016"></svg:path><svg:circle cx="35.996" cy="16.008" r="5"></svg:circle></svg:g>`,
})
export class OpenmojiCrownIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
