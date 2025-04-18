import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCrownSimpleBoldIcon],svg[ph-crown-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232.63 70a19.82 19.82 0 0 0-23.55 4.71l-29.52 31.82l-33.34-74.77l-.06-.14a20 20 0 0 0-36.32 0l-.06.14l-33.34 74.76L46.92 74.7a20 20 0 0 0-34.6 16.81c0 .16.06.31.09.47l22.66 103.78A20 20 0 0 0 54.71 212h146.58a20 20 0 0 0 19.64-16.24L243.59 92c0-.16.07-.31.09-.47A19.82 19.82 0 0 0 232.63 70m-34.57 118H57.94l-18.88-86.49l32.14 34.65a12 12 0 0 0 19.8-3.27l37-83.07l37 83.07a12 12 0 0 0 19.76 3.27l32.14-34.65Z"></svg:path>`,
})
export class PhCrownSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
