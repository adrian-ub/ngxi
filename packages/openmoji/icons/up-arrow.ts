import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiUpArrowIcon],svg[openmoji-up-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3F3F3F" d="M19.502 22.824L36 5.036l16.498 17.788l-4.076 3.789l-9.641-10.396v50.819h-5.562V16.217l-9.641 10.396z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M19.502 22.824L36 5.036l16.498 17.788l-4.076 3.789l-9.641-10.396v50.819h-5.562V16.217l-9.641 10.396z"></svg:path>`,
})
export class OpenmojiUpArrowIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
