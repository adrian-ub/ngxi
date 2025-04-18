import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1LeftAngerBubbleIcon],svg[emojione-v1-left-anger-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c22c4b" d="M8.473 22.539L5.13 13.668l12.516 1.842l5.503-8.01l5.68 5.421l11.258-7.01l1.864 8.24l9.788-2.371l.153 7.175l9.626-1.853l-5.576 6.809l7.907 5.809l-7.948 5.422l3.43 8.564l-12.681-.115s5.542 9.695 7.803 13.556l-19.524-10.72l-8.658 6.313l-2.441-6.773l-6.33 3.038l-.824-5.083l-9.775 5.41l3.779-9.08l-7.488.39l3.874-6.803l-6.99-8.874"></svg:path>`,
})
export class EmojioneV1LeftAngerBubbleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
