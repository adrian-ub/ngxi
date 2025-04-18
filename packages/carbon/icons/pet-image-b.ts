import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPetImageBIcon],svg[carbon-pet-image-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs></svg:defs><svg:path d="M19 21h2v3h-2z" fill="currentColor"></svg:path><svg:path d="M19 0h2v3h-2z" fill="currentColor"></svg:path><svg:path d="M8 11h3v2H8z" fill="currentColor"></svg:path><svg:path d="M29 11h3v2h-3z" fill="currentColor"></svg:path><svg:path transform="rotate(-45 12.586 4.577)" d="M11.59 3.07h1.98v3h-1.98z" fill="currentColor"></svg:path><svg:path transform="rotate(-45 27.43 19.408)" d="M26.44 17.92h1.98v3h-1.98z" fill="currentColor"></svg:path><svg:path transform="rotate(-45 12.592 19.414)" d="M11.09 18.42h3v1.98h-3z" fill="currentColor"></svg:path><svg:path transform="rotate(-45 27.423 4.57)" d="M25.93 3.58h3v1.98h-3z" fill="currentColor"></svg:path><svg:path d="M20 5a7 7 0 1 0 7 7a7 7 0 0 0-7-7zm0 12a5 5 0 0 1 0-10z" fill="currentColor"></svg:path><svg:path d="M5 18H0v14h5a3 3 0 0 0 3-3v-2a3 3 0 0 0-.78-2A3 3 0 0 0 8 23v-2a3 3 0 0 0-3-3zm-3 2h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2zm4 9a1 1 0 0 1-1 1H2v-4h3a1 1 0 0 1 1 1z" fill="currentColor"></svg:path><svg:path d="M2 2h7V0H0v9h2V2z" fill="currentColor"></svg:path>`,
})
export class CarbonPetImageBIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
