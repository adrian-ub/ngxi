import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1NewMoonIcon],svg[emojione-v1-new-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="32" fill="#405866"></svg:circle><svg:g fill="#4f6977"><svg:circle cx="29.31" cy="52.982" r="9.262"></svg:circle><svg:path d="M41.943 24.333a3.936 3.936 0 0 1-7.869 0a3.934 3.934 0 0 1 7.869 0"></svg:path><svg:circle cx="5.863" cy="36.434" r="3.86"></svg:circle><svg:circle cx="6.211" cy="18.742" r="2.204"></svg:circle><svg:circle cx="17.477" cy="19.481" r="3.446"></svg:circle><svg:path d="M47.792 10.867a4.853 4.853 0 1 1-9.706 0a4.853 4.853 0 0 1 9.706 0"></svg:path></svg:g>`,
})
export class EmojioneV1NewMoonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
