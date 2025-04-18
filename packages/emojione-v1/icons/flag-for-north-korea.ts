import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForNorthKoreaIcon],svg[emojione-v1-flag-for-north-korea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#024fa2" d="M54 11H10c-5.491 0-8.74 3.385-9.695 8h63.39c-.956-4.615-4.205-8-9.696-8M10 55h44c5.881 0 9.193-3.881 9.865-9H.135c.672 5.119 3.984 9 9.865 9"></svg:path><svg:path fill="#ed1c27" d="M0 22v22h64V22c0-.338-.015-.67-.035-1H.035c-.02.33-.035.662-.035 1"></svg:path><svg:path fill="#e6e7e8" d="M0 44c0 .684.049 1.351.135 2h63.73c.086-.649.135-1.316.135-2zm63.965-23a14 14 0 0 0-.27-2H.305a14 14 0 0 0-.27 2z"></svg:path><svg:circle cx="19.393" cy="32.393" r="8.893" fill="#e6e7e8"></svg:circle><svg:path fill="#ed1c27" d="m26.803 30.08l-5.693.01l-1.765-5.757l-1.754 5.757l-5.696-.01l4.615 3.51l-1.791 5.72l4.635-3.554l4.635 3.554l-1.789-5.72z"></svg:path>`,
})
export class EmojioneV1FlagForNorthKoreaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
