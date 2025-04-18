import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBasketballIcon],svg[icon-park-basketball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path d="M8.5459 11.2727C12.7883 14.9091 14.9095 19.1515 14.9095 24C14.9095 28.8485 12.7883 33.0909 8.5459 36.7272"></svg:path><svg:path d="M39.4545 36.7272C35.212 33.0909 33.0908 28.8485 33.0908 24C33.0908 19.1515 35.212 14.9091 39.4545 11.2727"></svg:path><svg:path d="M4 24H44"></svg:path><svg:path d="M24 4V44"></svg:path></svg:g>`,
})
export class IconParkBasketballIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
