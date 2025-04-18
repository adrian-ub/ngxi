import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiLadderIcon],svg[arcticons-emoji-ladder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.872 42.5l12-37m-1.743 37l11.999-37M23.674 9.191h10.257m-13.058 8.638H31.13m-5.602 17.274H15.27m2.802-8.637h10.257"></svg:path>`,
})
export class ArcticonsEmojiLadderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
