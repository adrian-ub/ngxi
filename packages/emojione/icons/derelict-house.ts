import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneDerelictHouseIcon],svg[emojione-derelict-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#94989b" d="M0 60h64v4H0zm44-45v45h17l-4-23l4-22z"></svg:path><svg:path fill="#d0d0d0" d="M50 16L26 4L6 24l3 8l-4 28h44l-4-13z"></svg:path><svg:path fill="#c94747" d="M63 14.4L38 0H26l24 18h12c.7 0 1.4-.3 1.7-1c.6-.9.3-2-.7-2.6"></svg:path><svg:path fill="#ed4c5c" d="M51 14.4L26 0L1 26.4C0 27-.3 28.1.3 29c.5 1 1.7 1.3 2.6.7L26 4l23.1 13.7c.9.5 2.1.2 2.6-.7c.6-.9.3-2-.7-2.6"></svg:path><svg:g fill="#3e4347"><svg:path d="m49 44l3.4 16H57z"></svg:path><svg:path d="m55 39l-4 13.1l2.1 2.9zm-41.3 1H24l-2 11l2 9H13.7L12 47zm42-8H51l1.3-8H57zM24 32h-8l-2-8h8zm6 0h8l2-8h-8z"></svg:path></svg:g><svg:path fill="#dbb471" d="m42 36l-4-4l2-8l4 4z"></svg:path><svg:path fill="#3e4347" d="M40.2 3v2.1H38L44.5 9h3.2l4.3 2l-3.2-4H45zm.8 51h-9.8L29 47l2.2-7H41l-1.2 5.8z"></svg:path><svg:path fill="#dbb471" d="M11.2 56L10 53.3L24.8 50l1.2 2.7zm14.3-7L10 46.1l.5-3.1L26 45.9z"></svg:path>`,
})
export class EmojioneDerelictHouseIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
