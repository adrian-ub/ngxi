import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneRightArrowCurvingUpIcon],svg[emojione-monotone-right-arrow-curving-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.213 10.786c-11.715-11.715-30.711-11.715-42.426 0s-11.716 30.711 0 42.426c11.715 11.717 30.711 11.717 42.426 0c11.716-11.715 11.716-30.711 0-42.426m-12.811 8.721V40.7c0 6.781-5.623 12.299-12.537 12.299c-3.349 0-6.497-1.279-8.865-3.6l5.065-4.971a5.4 5.4 0 0 0 3.8 1.541c2.963 0 5.373-2.363 5.373-5.27V19.507h-4.596l8.179-8.508L45 19.507z"></svg:path>`,
})
export class EmojioneMonotoneRightArrowCurvingUpIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
