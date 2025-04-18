import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiScrewdriverIcon],svg[arcticons-emoji-screwdriver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.313 24.505l11.429 11.43a2.765 2.765 0 0 1-.099 3.906l-1.751 1.751a2.765 2.765 0 0 1-3.906.099l-11.43-11.43l.773-.772l-1.776-1.776l-.772.773l-2.212-2.213l5.756-5.756l2.212 2.212l-.83.831l1.775 1.776z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.146 22.697L12.279 10.619l-.656-3.142L7.209 5.55L5.5 7.26l1.971 4.37l3.099.7l12.023 11.92m5.457 5.562l9.766 9.766M29.76 28.101l9.766 9.766"></svg:path>`,
})
export class ArcticonsEmojiScrewdriverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
