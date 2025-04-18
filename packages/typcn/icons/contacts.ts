import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnContactsIcon],svg[typcn-contacts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H8C6.346 3 5 4.346 5 6v1H4a1 1 0 1 0 0 2h1v2H4a1 1 0 1 0 0 2h1v2H4a1 1 0 1 0 0 2h1v1c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3M7 6c0-.551.449-1 1-1v2H7zm0 3h1v2H7zm0 4h1v2H7zm0 5v-1h1v2c-.551 0-1-.449-1-1m13 0c0 .551-.449 1-1 1H9V5h10c.551 0 1 .449 1 1z"></svg:path><svg:circle cx="14" cy="10.5" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M14 13.356c-1.562 0-2.5.715-2.5 1.429c0 .357.938.715 2.5.715c1.466 0 2.5-.357 2.5-.715c0-.714-.98-1.429-2.5-1.429"></svg:path>`,
})
export class TypcnContactsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
