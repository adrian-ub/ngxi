import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFiveOclockIcon],svg[emojione-monotone-five-oclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m7.415 46l-6.188-10H30v-2.555c-1.19-.693-2-1.969-2-3.445c0-.636.162-1.229.426-1.762L27 27.934l3-1.619V6h4v22.555c1.19.693 2 1.969 2 3.445c0 .702-.196 1.352-.514 1.925L43 46.07z"></svg:path><svg:circle cx="32" cy="32" r="3" fill="currentColor"></svg:circle>`,
})
export class EmojioneMonotoneFiveOclockIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
