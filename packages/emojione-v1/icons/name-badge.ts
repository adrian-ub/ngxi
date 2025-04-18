import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1NameBadgeIcon],svg[emojione-v1-name-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#be202e" d="m48.833 5.755l-6.7 9.937l-9.905-14.688L31.962 1l-9.907 14.692l-6.71-9.96c-7.64 5.202-12.73 14.176-12.82 24.433l-.024 3.106c-.14 16.257 12.326 29.555 27.848 29.7L33.31 63c15.523.143 28.209-12.92 28.344-29.178l.027-3.105c.088-10.459-5.054-19.671-12.853-24.964"></svg:path><svg:path fill="#fff" d="M56.623 34.119c-.031 3.625-2.862 6.543-6.323 6.509l-36.531-.34c-3.464-.034-6.241-2.999-6.211-6.627l.008-.942c.028-3.626 2.86-6.54 6.322-6.508l36.532.34c3.462.034 6.24 3.003 6.21 6.63z"></svg:path>`,
})
export class EmojioneV1NameBadgeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
