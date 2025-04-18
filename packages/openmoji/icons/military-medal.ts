import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMilitaryMedalIcon],svg[openmoji-military-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiMilitaryMedal0" d="m36 27.737l5.248 16.151H58.23L44.491 53.87l5.248 16.151L36 60.039l-13.739 9.982l5.248-16.151l-13.739-9.982h16.982zm0-8.673V2.021m20 6.958V2.021H16v6.958l20 14.758z"></svg:path></svg:defs><svg:g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#fcea2b" d="m36 27.737l5.248 16.151H58.23L44.491 53.87l5.248 16.151L36 60.039l-13.739 9.982l5.248-16.151l-13.739-9.982h16.982z"></svg:path><svg:path fill="#ea5a47" d="M56 8.979V2.021H16v6.958l20 14.758z"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:use href="#openmojiMilitaryMedal0"></svg:use><svg:use href="#openmojiMilitaryMedal0"></svg:use></svg:g>`,
})
export class OpenmojiMilitaryMedalIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
