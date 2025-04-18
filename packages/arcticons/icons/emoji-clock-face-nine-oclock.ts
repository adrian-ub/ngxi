import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiClockFaceNineOclockIcon],svg[arcticons-emoji-clock-face-nine-oclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.04 8.108v15.89m0 0l-10.641.03M2.5 23.998c-.002 11.874 9.623 21.5 21.497 21.502S45.498 35.878 45.5 24.005v-.007C45.5 12.125 35.874 2.5 24 2.5S2.5 12.125 2.5 23.998"></svg:path>`,
})
export class ArcticonsEmojiClockFaceNineOclockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
