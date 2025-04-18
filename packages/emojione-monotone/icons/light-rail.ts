import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneLightRailIcon],svg[emojione-monotone-light-rail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.346 14C14.488 14 2 37.428 2 50.605c0 1.869.876 4.215 2.234 5.855H2V62h60v-5.539H7.735C5.64 56.399 4 52.713 4 50.605c0-.476.021-.967.054-1.465h8.176s13.182 0 13.182-7.32V19.856H17.86C20.377 17.469 22.959 16 25.346 16H62v-2z"></svg:path><svg:path fill="currentColor" d="M34.226 35.23v13.91H62V19.856H41.55c-7.324 0-7.324 1.464-7.324 15.374"></svg:path><svg:ellipse cx="6.395" cy="52.801" fill="currentColor" rx=".732" ry="2.197"></svg:ellipse>`,
})
export class EmojioneMonotoneLightRailIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
