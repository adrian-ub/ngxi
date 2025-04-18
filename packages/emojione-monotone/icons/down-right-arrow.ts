import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneDownRightArrowIcon],svg[emojione-monotone-down-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.213 10.786c-11.715-11.715-30.71-11.715-42.425 0c-11.717 11.717-11.717 30.711 0 42.426c11.715 11.717 30.71 11.717 42.425 0c11.715-11.715 11.715-30.709 0-42.426M45 44.999H22.874l7.345-7.563L17 24.044l6.956-7.045l13.458 13.283L45 22.866z"></svg:path>`,
})
export class EmojioneMonotoneDownRightArrowIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
