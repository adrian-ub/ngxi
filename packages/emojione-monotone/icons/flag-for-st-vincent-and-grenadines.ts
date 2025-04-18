import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForStVincentAndGrenadinesIcon],svg[emojione-monotone-flag-for-st-vincent-and-grenadines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24.892 18.154l-5.921 10.18l5.921 10.179l5.923-10.179zm14.214 0l-5.922 10.18l5.922 10.179l5.923-10.179zM26.077 41.566L32 51.745l5.921-10.179L32 31.388z"></svg:path><svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M16.267 55.148V8.852C20.754 5.792 26.171 4 32 4s11.246 1.792 15.733 4.852v46.297C43.246 58.208 37.829 60 32 60s-11.246-1.792-15.733-4.852"></svg:path>`,
})
export class EmojioneMonotoneFlagForStVincentAndGrenadinesIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
