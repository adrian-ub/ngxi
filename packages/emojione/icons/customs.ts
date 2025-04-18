import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneCustomsIcon],svg[emojione-customs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M17.4 43.5h14v6h-14zm-6-14h6v14h-6zM37.2 22c0 4.8 9.6 4.8 9.6 0v-4.8h-9.6l-3.8 2.9h3.8zm9.5-5.7v-3.8H36.2l1 3.8zM33.8 42.1l14.4-14.4H33.8L20.3 41.8H26l7.8-8.2zm0 2.4h16.8v5H33.8zm1.7-1.7h15.1V27.7z"></svg:path>`,
})
export class EmojioneCustomsIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
