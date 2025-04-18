import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneNoLitteringIcon],svg[emojione-no-littering-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32.1" r="30" fill="#ff5a79"></svg:circle><svg:circle cx="32" cy="32.1" r="24" fill="#333"></svg:circle><svg:g fill="#fff"><svg:path d="M32.6 20.5h2.6c1 0 1.7-.6 1.7-1.4v-3.4c0-.8-.8-1.4-1.7-1.4h-2.6c-1 0-1.7.6-1.7 1.4v3.4c0 .7.8 1.4 1.7 1.4m6.9 1.5H28c-.8 0-1.5.5-1.5 1.2V29l-3.7 3v1.3l5.8-2.9l.7-6V50h3l1.5-11.6L35.3 50h3V24.3l1.3 11.6H41V23.2c0-.7-.7-1.2-1.5-1.2M20 34.3h2.8v3.8H20z"></svg:path><svg:path d="M23.8 38.9h2.8v3.8h-2.8zm-4.6 4.3H22V47h-2.8z"></svg:path></svg:g><svg:path fill="#ff5a79" d="m9.263 13.592l4.243-4.243L54.8 50.644l-4.242 4.243z"></svg:path>`,
})
export class EmojioneNoLitteringIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
