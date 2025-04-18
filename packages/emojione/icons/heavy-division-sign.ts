import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneHeavyDivisionSignIcon],svg[emojione-heavy-division-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#4d5357"><svg:path d="M2 26h60v12H2z"></svg:path><svg:circle cx="32" cy="9.5" r="7.5"></svg:circle><svg:circle cx="32" cy="54.5" r="7.5"></svg:circle></svg:g>`,
})
export class EmojioneHeavyDivisionSignIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
