import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForTogoIcon],svg[emojione-v1-flag-for-togo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#009543" d="M63.865 19c-.672-5.119-3.984-9-9.865-9H26v9z"></svg:path><svg:path fill="#f9cb38" d="M63.865 19H26v9h38v-7c0-.684-.049-1.351-.135-2"></svg:path><svg:path fill="#009543" d="M26 28h38v8H26z"></svg:path><svg:path fill="#f9cb38" d="M0 36v7c0 .684.049 1.351.135 2h63.73c.086-.649.135-1.316.135-2v-7z"></svg:path><svg:path fill="#009543" d="M10 54h44c5.881 0 9.193-3.881 9.865-9H.135c.672 5.119 3.984 9 9.865 9"></svg:path><svg:path fill="#c32129" d="M10 10C4.119 10 .807 13.881.135 19A15 15 0 0 0 0 21v15h26V10z"></svg:path><svg:path fill="#e6e7e8" d="m21.574 20.393l-6.661.009l-2.066-6.738l-2.053 6.738l-6.666-.009l5.399 4.103l-2.093 6.694l5.42-4.16l5.424 4.16l-2.095-6.694z"></svg:path>`,
})
export class EmojioneV1FlagForTogoIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
