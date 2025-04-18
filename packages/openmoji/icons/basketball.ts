import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBasketballIcon],svg[openmoji-basketball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="29" fill="#F4AA41"></svg:circle><svg:path fill="#E27022" d="M50.7 11c4.8 5.2 7.8 12.1 7.8 19.8c0 16-13 29-29 29c-5.4 0-10.4-1.5-14.7-4C20.1 61.4 27.7 65 36 65c16 0 29-13 29-29c0-10.7-5.7-20-14.3-25"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M7 36h58M36 7v58m19.2-7.3c-5.6-5.6-9-13.2-9-21.8c0-8.5 3.4-16.2 9-21.8m-38.3.1c5.6 5.6 9 13.3 9 21.8s-3.4 16.2-9 21.8"></svg:path><svg:circle cx="36" cy="36" r="29"></svg:circle></svg:g>`,
})
export class OpenmojiBasketballIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
