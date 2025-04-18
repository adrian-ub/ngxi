import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1ThoughtBalloonIcon],svg[emojione-v1-thought-balloon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#97d8ea" transform="translate(.11 5.498)"><svg:ellipse cx="14.177" cy="44.842" rx="4.602" ry="3.746"></svg:ellipse><svg:ellipse cx="6.676" cy="51.49" rx="2.899" ry="2.24"></svg:ellipse><svg:ellipse cx="16.794" cy="24.828" rx="16.824" ry="12.258"></svg:ellipse><svg:ellipse cx="34.851" cy="13.792" rx="23.574" ry="14.02"></svg:ellipse><svg:ellipse cx="34.851" cy="12.92" rx="18.06" ry="9.916"></svg:ellipse><svg:ellipse cx="33.618" cy="29.778" rx="18.06" ry="9.915"></svg:ellipse><svg:ellipse cx="46.721" cy="27.537" rx="17.14" ry="9.444"></svg:ellipse></svg:g>`,
})
export class EmojioneV1ThoughtBalloonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
