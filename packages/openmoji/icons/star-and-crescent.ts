import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiStarAndCrescentIcon],svg[openmoji-star-and-crescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiStarAndCrescent0" d="M45 57c1.975 0 3.9-.275 5.713-.8A24.8 24.8 0 0 1 36 61c-13.812 0-25-11.187-25-25s11.188-25 25-25c5.5 0 10.588 1.775 14.713 4.8A20.5 20.5 0 0 0 45 15c-11.6 0-21 9.4-21 21s9.4 21 21 21"></svg:path><svg:path id="openmojiStarAndCrescent1" d="m50.652 27.896l2.372 4.807l5.306.771l-3.839 3.742l.906 5.284l-4.745-2.495l-4.745 2.495l.906-5.284l-3.839-3.742l5.305-.771z"></svg:path></svg:defs><svg:g fill="#B399C8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:use href="#openmojiStarAndCrescent0"></svg:use><svg:use href="#openmojiStarAndCrescent1"></svg:use></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:use href="#openmojiStarAndCrescent0"></svg:use><svg:use href="#openmojiStarAndCrescent1"></svg:use></svg:g>`,
})
export class OpenmojiStarAndCrescentIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
