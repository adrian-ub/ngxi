import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForAzerbaijanIcon],svg[emojione-v1-flag-for-azerbaijan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ec1c24" d="M0 24h64v16H0z"></svg:path><svg:path fill="#1b75bb" d="M54 10H10C3.373 10 0 14.925 0 21v3h64v-3c0-6.075-3.373-11-10-11"></svg:path><svg:path fill="#29b473" d="M0 43c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11v-3H0z"></svg:path><svg:g fill="#e6e7e8"><svg:path fill-rule="evenodd" d="M35.35 35.23c-1.293 2.01-3.983 3.283-6.798 2.463c-2.655-.777-4.479-3.35-4.326-6.125c.146-2.788 2.238-5.16 4.96-5.644c2.883-.509 5.196 1.035 6.188 2.65c-1.175-1.148-2.537-1.67-4.133-1.485c-1.249.144-2.295.708-3.111 1.66c-1.602 1.863-1.544 4.66.13 6.42c.958 1.01 2.137 1.536 3.53 1.549c1.389.01 2.567-.516 3.56-1.488"></svg:path><svg:path d="m39.83 32.618l1.52-.732l-1.52-.736l.56-1.587l-1.595.557l-.735-1.519l-.73 1.519l-1.592-.557l.552 1.587l-1.514.736l1.514.732l-.552 1.592l1.592-.555l.73 1.515l.735-1.515l1.595.555z"></svg:path></svg:g>`,
})
export class EmojioneV1FlagForAzerbaijanIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
