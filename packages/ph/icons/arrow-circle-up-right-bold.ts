import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleUpRightBoldIcon],svg[ph-arrow-circle-up-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m44-116v48a12 12 0 0 1-24 0v-19l-43.51 43.52a12 12 0 0 1-17-17L131 108h-19a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhArrowCircleUpRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
