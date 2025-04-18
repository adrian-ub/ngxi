import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiStarWithLeftHalfBlackIcon],svg[openmoji-star-with-left-half-black-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="m37.06 11l-9.208 15.87L9.5 29.544l13.285 12.94l-3.128 18.28L37.06 52.5z"></svg:path><svg:path fill="#FCEA2B" d="m35 11.5l9.648 15.87L63 30.044l-13.285 12.94l3.128 18.28L35 52.5z"></svg:path><svg:path fill="#3F3F3F" d="m37.06 11l-9.208 15.87L9.5 29.544l13.285 12.94l-3.128 18.28L37.06 52.5z"></svg:path><svg:g stroke="#000" stroke-linecap="round" stroke-width="2"><svg:path fill="none" stroke-linejoin="round" stroke-miterlimit="10" d="M35.993 10.736L27.79 27.37L9.44 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z"></svg:path><svg:path d="M36 12v37"></svg:path></svg:g>`,
})
export class OpenmojiStarWithLeftHalfBlackIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
