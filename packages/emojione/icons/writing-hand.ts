import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneWritingHandIcon],svg[emojione-writing-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#eba352" d="M20.6 55c1 1.1 7.9 1 9.1.2c2.5-1.5 19.9-22.4 4.8-28.5c-11.5-4.7-14 5.9-15.2 6.8c-2.3 1.8-.6 19.4 1.3 21.5"></svg:path><svg:g fill="#ffdd67"><svg:path d="M57.6 54.3c-17.4.1-8.9 2.6-22.8 2.6c-5.5 0-10.2-3.6-10.2-8.6v-.1c8.6-5.7-5.8-3.2-3.6-16.7c.7-4.5 5.5-4.8 11.8-5.4c5.3-.5 23.2 6.3 23.2 6.3c6.4 2.3 8.8 21.9 1.6 21.9"></svg:path><svg:path d="M20.1 23.2c2.8-1.9 16 3.2 16 3.2L28 46.8S-.6 46 8.7 38.2c7.8-6.5 7.5-12.3 11.4-15"></svg:path></svg:g><svg:g fill="#eba352"><svg:path d="M7.8 39.1c-2.2 5.5 17.9 6.4 20.6 6.5l-.5 1.2S1.5 46 7.8 39.1m19.8-4c3.4 5.2 4.9 6.3 4.9 6.3s-3.4-.8-5.7-4.2z"></svg:path><svg:path d="M27.4 34c1.5 0 0 7.3 1.7 9.3c-.4 1.3-3 .5-3 .5s.8-9 .7-9.5z"></svg:path><svg:path d="m19.6 40.5l1.5 1.5s13.7-12.6 17.5-15.1l-4.5-1z"></svg:path></svg:g><svg:path fill="#428bc1" d="m8.5 44.5l4.4 4.3l34.6-34.5l-4.3-4.3z"></svg:path><svg:g fill="#574137"><svg:path d="m43.9 10.8l2.9 2.8l3.8-3.7L47.7 7zm-6.1 3.3l5.6 5.5l1-.9l-5.7-5.6z"></svg:path><svg:path d="m28.8 21.5l.8.7l9.1-9.1l-.7-.7z"></svg:path></svg:g><svg:path fill="#a9b5ae" d="m12.9 48.8l-9.8 5.4l5.4-9.7z"></svg:path><svg:path fill="#574137" d="m2 54.6l.7.7l2-2l-.7-.7z"></svg:path><svg:path fill="#ffdd67" d="M39.4 51.4c.2-.6.3-1.1.4-1.7c.1-.3.2-.6.3-1c1-4.3-15.3-7.1-15.3-7.1l-1.2-.3c-2.6-.6-8.3-1.3-12.5 3.5c-2.9 3.4.1 6.8 2.8 7c7.3.7 12.7 2.5 16.8 4.2c3.6 1.7 7.2-.2 8.7-4.6"></svg:path><svg:path fill="#eba352" d="M23.5 42.9c-2.6-.9-6.8-3.2-12.2 1.6c5-6.1 13.1-3 13.4-2.9c7.6 1 12.6-2 12.6-2c-1.5 3.8-10.1 4.6-13.8 3.3m11.8 12.7c13.9 0 5.5-2.5 22.8-2.6c1.5 0 2.7-1.5 3.4-2.9c-.5 2.7-2 4.2-3.9 4.2c-17.4.1-9 2.7-22.9 2.7c-5.5 0-10.7-2.8-15.1-4.2c-.1-.1 10.5 2.8 15.7 2.8"></svg:path>`,
})
export class EmojioneWritingHandIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
