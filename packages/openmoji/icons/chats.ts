import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiChatsIcon],svg[openmoji-chats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D0CFCE" d="M15.042 14.976a4 4 0 0 0-4 4V30.76l-.002 4.531c0 .28.328.434.543.253l5.026-4.39a1 1 0 0 1 .644-.234h30.956a4 4 0 0 0 4-4v-7.944a4 4 0 0 0-4-4z"></svg:path><svg:path fill="#9B9B9A" d="M60.51 60.544a.33.33 0 0 0 .542-.252l-.002-4.27h.001V44.076a4 4 0 0 0-4-4H24.103a4 4 0 0 0-4 4v7.944a4 4 0 0 0 4 4h30.858a1 1 0 0 1 .644.235z"></svg:path><svg:path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M15.042 14.976a4 4 0 0 0-4 4V30.76l-.002 4.531c0 .28.328.434.543.253l5.026-4.39a1 1 0 0 1 .644-.234h30.956a4 4 0 0 0 4-4v-7.944a4 4 0 0 0-4-4zM60.51 60.544a.33.33 0 0 0 .542-.252l-.002-4.27h.001V44.076a4 4 0 0 0-4-4H24.103a4 4 0 0 0-4 4v7.944a4 4 0 0 0 4 4h30.858a1 1 0 0 1 .644.235z"></svg:path><svg:circle cx="31.997" cy="48.059" r="2"></svg:circle><svg:circle cx="40.008" cy="48.059" r="2"></svg:circle><svg:circle cx="48.02" cy="48.059" r="2"></svg:circle>`,
})
export class OpenmojiChatsIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
