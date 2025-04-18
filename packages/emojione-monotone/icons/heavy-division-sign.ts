import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneHeavyDivisionSignIcon],svg[emojione-monotone-heavy-division-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 26h60v12H2z"></svg:path><svg:circle cx="32" cy="9.5" r="7.5" fill="currentColor"></svg:circle><svg:circle cx="32" cy="54.5" r="7.5" fill="currentColor"></svg:circle>`,
})
export class EmojioneMonotoneHeavyDivisionSignIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
