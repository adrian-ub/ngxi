import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1LeftThoughtBubbleIcon],svg[emojione-v1-left-thought-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#97d8ea" transform="translate(.11 5.498)"><svg:ellipse cx="49.46" cy="44.28" rx="4.592" ry="3.739"></svg:ellipse><svg:ellipse cx="56.946" cy="50.909" rx="2.893" ry="2.235"></svg:ellipse><svg:ellipse cx="46.85" cy="24.31" rx="16.787" ry="12.23"></svg:ellipse><svg:ellipse cx="28.832" cy="13.299" rx="23.521" ry="13.994"></svg:ellipse><svg:ellipse cx="28.833" cy="12.428" rx="18.02" ry="9.893"></svg:ellipse><svg:ellipse cx="30.06" cy="29.25" rx="18.02" ry="9.893"></svg:ellipse><svg:ellipse cx="16.99" cy="27.01" rx="17.1" ry="9.423"></svg:ellipse></svg:g>`,
})
export class EmojioneV1LeftThoughtBubbleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
