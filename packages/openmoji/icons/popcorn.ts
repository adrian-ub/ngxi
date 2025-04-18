import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPopcornIcon],svg[openmoji-popcorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ea5a47" d="M22 27h28l-3 33H25z"></svg:path><svg:path fill="#fcea2b" d="m50.672 27.243l2.86-1.547l-.53-.87a2.997 2.997 0 0 0-.36-5.753a2.99 2.99 0 0 0-.52-3.508a2.99 2.99 0 0 0-3.14-.691a2.99 2.99 0 0 0-1.48-2.33a2.98 2.98 0 0 0-2.522-.206a2.99 2.99 0 0 0-2.2-2.69a2.99 2.99 0 0 0-2.66.573A3 3 0 0 0 39 10c-.243 0-.477.037-.703.092A2.98 2.98 0 0 0 36 9c-.928 0-1.747.43-2.297 1.092A3 3 0 0 0 33 10c-.395 0-.77.081-1.116.22a2.99 2.99 0 0 0-2.66-.573a2.99 2.99 0 0 0-2.18 3.322a2.99 2.99 0 0 0-3.543-.424a2.98 2.98 0 0 0-1.453 2.146a2.98 2.98 0 0 0-2.17.873a2.99 2.99 0 0 0-.523 3.51a2.998 2.998 0 0 0-.341 5.758l-.295.942l3.094 1.938"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M53.003 24.825a2.997 2.997 0 0 0-.36-5.752a2.99 2.99 0 0 0-.52-3.508a2.99 2.99 0 0 0-3.14-.691a2.99 2.99 0 0 0-1.481-2.33a2.98 2.98 0 0 0-2.522-.206a2.99 2.99 0 0 0-2.2-2.69a2.99 2.99 0 0 0-2.66.573A3 3 0 0 0 39 10c-.243 0-.477.037-.703.092A2.98 2.98 0 0 0 36 9c-.928 0-1.747.43-2.297 1.092A3 3 0 0 0 33 10c-.395 0-.77.081-1.116.22a2.99 2.99 0 0 0-2.66-.573a2.99 2.99 0 0 0-2.18 3.322a2.99 2.99 0 0 0-3.543-.424a2.98 2.98 0 0 0-1.453 2.146a2.98 2.98 0 0 0-2.17.873a2.99 2.99 0 0 0-.523 3.51a2.998 2.998 0 0 0-.341 5.758M22 27h28l-3 33H25z"></svg:path><svg:path d="M26 21a3 3 0 0 1 3-3m5 0a3 3 0 0 1 3-3"></svg:path></svg:g>`,
})
export class OpenmojiPopcornIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
