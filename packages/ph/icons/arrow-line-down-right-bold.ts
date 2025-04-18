import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownRightBoldIcon],svg[ph-arrow-line-down-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 40a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12m-36 52a12 12 0 0 0-12 12v67L88.49 79.51a12 12 0 0 0-17 17L163 188H96a12 12 0 0 0 0 24h96a12 12 0 0 0 12-12v-96a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhArrowLineDownRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
