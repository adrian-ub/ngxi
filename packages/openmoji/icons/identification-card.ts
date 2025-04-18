import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiIdentificationCardIcon],svg[openmoji-identification-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiIdentificationCard0" d="M9.915 22.002h16.698m8.248 0h27.171m-27.098 7.554h19.174m-19.174 3.998h19.174m-19.174 3.998h19.174"></svg:path></svg:defs><svg:use href="#openmojiIdentificationCard0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:use><svg:rect width="62" height="38" x="5" y="17" fill="#d0cfce" rx="3.508"></svg:rect><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 29.544h16.528v19.462H10z"></svg:path><svg:path fill="#fcea2b" d="m26.613 51l-1.153-4.563a4.3 4.3 0 0 0-4.209-4.131h-6a4.3 4.3 0 0 0-4.208 4.131L9.915 51Z"></svg:path><svg:circle cx="18.331" cy="34.8" r="3" fill="#fcea2b"></svg:circle><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m34.474 50.006l4.706-7.132l1.255 6.215l3.17-4.146l.77 3.435c4.792-2.643 9.533 1.474 13.268.115"></svg:path><svg:rect width="62" height="38" x="5" y="17" stroke-linecap="round" stroke-linejoin="round" rx="3.508"></svg:rect><svg:circle cx="18.331" cy="34.8" r="3" stroke-miterlimit="10"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m26.613 50.006l-.178-3.268a5.274 5.274 0 0 0-5.207-5H15.3a5.274 5.274 0 0 0-5.208 5l-.178 3.268"></svg:path></svg:g><svg:use href="#openmojiIdentificationCard0" fill="none" stroke="#9b9b9a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:use>`,
})
export class OpenmojiIdentificationCardIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
