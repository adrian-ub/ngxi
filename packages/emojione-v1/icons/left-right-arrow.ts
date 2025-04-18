import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1LeftRightArrowIcon],svg[emojione-v1-left-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1b75bb" d="M63.918 57.025a6.89 6.89 0 0 1-6.891 6.895H6.888A6.89 6.89 0 0 1 0 57.025V6.891A6.89 6.89 0 0 1 6.888 0h50.139a6.89 6.89 0 0 1 6.891 6.891z"></svg:path><svg:g fill="#fff"><svg:path d="M19.502 18.843L4.362 32.005l15.13 13.07c2.11-.169 3.762-1.582 3.762-3.304v-2.924h13.719a4.18 4.18 0 0 0 4.182-4.178v-5.422a4.183 4.183 0 0 0-4.182-4.182H23.254v-2.921c0-1.719-1.645-3.133-3.754-3.302"></svg:path><svg:path d="m44.41 18.843l15.14 13.162l-15.13 13.07c-2.112-.169-3.762-1.582-3.762-3.304v-2.924H26.94a4.18 4.18 0 0 1-4.182-4.178v-5.422a4.183 4.183 0 0 1 4.182-4.182h13.718v-2.921c0-1.719 1.646-3.133 3.754-3.302"></svg:path></svg:g>`,
})
export class EmojioneV1LeftRightArrowIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
