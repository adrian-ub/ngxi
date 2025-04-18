import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojionePersonInBedIcon],svg[emojione-person-in-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#3e4347"><svg:path d="M6 55c0 .5-.4 1-1 1H3c-.5 0-1-.5-1-1V13c0-.6.5-1 1-1h2c.6 0 1 .4 1 1z"></svg:path><svg:path d="M5 55.3h4V62H5zm50 0h4V62h-4z"></svg:path><svg:path d="M62 49c0-.5-.4-1-1-1H3c-.5 0-1 .5-1 1v8c0 .5.5 1 1 1h58c.6 0 1-.5 1-1z"></svg:path></svg:g><svg:path fill="#b0bdc6" d="M6 40h20v8H6z"></svg:path><svg:path fill="#dae3ea" d="M23.5 39.9s-6.3 3.1-14.3.8c-2.5-.7-5.3.9-4.8-.3c1.7-3.6 2.2-11-.1-13.9c-1.6-2.1 3.6-.6 4.5 2.7c2.7 9.8 14.7 6 14.7 10.7"></svg:path><svg:path fill="#ffdd67" d="m16.8 35l-.7 1.4l5.3 2.6l2.2-4.6z"></svg:path><svg:path fill="#eba352" d="M17.1 34c2.4 1.2 5.2-1.6 5.2-1.6c-.2 2 1.3 2 1.3 2c-1 2-4.3 2.5-7.1 1.2z"></svg:path><svg:path fill="#ffdd67" d="m8 32.2l6.4-6.9c3.7.5 10.4 4.6 7.3 8.9c-.8 1.2-2.8 2.5-5.2 1.4L15 37.7z"></svg:path><svg:path fill="#ffbc00" d="M7.3 28c-2.9 6 1.8 9.2 5.6 10.1c2.1.5 3.8 0 4.8-.9l-1.3-1.7s-4.8-.6-4.8-4.9c0-1.8 2.6-3.9 2.6-5.4c-.8-.9-5.2-.8-6.9 2.8"></svg:path><svg:path fill="#ed4c5c" d="M60 38c-.5-.5-27.8-13.7-34.9-8.1l-2 18.1H61s.7-8.1-1-10"></svg:path><svg:path fill="#a53838" d="M30 27.7c-1-1.4-2.6.6-2.6.6s-.7-1-1.6-.6c-.8.4-1.2 1.8-1.2 1.8s-1-1.1-1.5-.3c-8 12.4.9 30.4.9 30.4s-.7-8.1 1.5-10.1c2-1.8 3.4 3.5 3.4 3.5s-.2-7.8.5-8.4c1.6-1.2 2.9 5 2.9 5s2.5-15.4-2.3-21.9"></svg:path>`,
})
export class EmojionePersonInBedIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
