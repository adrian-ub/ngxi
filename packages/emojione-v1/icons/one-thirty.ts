import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1OneThirtyIcon],svg[emojione-v1-one-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="31.923" cy="31.924" r="29.575" fill="#e0e7ec"></svg:circle><svg:path fill="#98a9b4" d="M31.926 0C14.322 0 0 14.321 0 31.926C0 49.529 14.322 63.85 31.926 63.85S63.85 49.53 63.85 31.926C63.85 14.321 49.529 0 31.926 0m0 57.635c-14.177 0-25.71-11.533-25.71-25.709c0-14.179 11.534-25.712 25.71-25.712s25.707 11.534 25.707 25.712c0 14.176-11.531 25.709-25.707 25.709"></svg:path><svg:path fill="#85939c" d="M33.799 52.836c0 1.436-.846 2.596-1.886 2.596s-1.886-1.16-1.886-2.596v-21.04c0-1.436.846-2.6 1.886-2.6s1.886 1.164 1.886 2.6z"></svg:path><svg:path fill="#788288" d="M37.14 16.1c.637-1.285 1.91-1.953 2.844-1.491s1.174 1.88.537 3.167l-6.756 13.642c-.637 1.285-1.912 1.952-2.844 1.491s-1.173-1.88-.54-3.165z"></svg:path>`,
})
export class EmojioneV1OneThirtyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
