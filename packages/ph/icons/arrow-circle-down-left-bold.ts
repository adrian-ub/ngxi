import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleDownLeftBoldIcon],svg[ph-arrow-circle-down-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m40.49-124.49a12 12 0 0 1 0 17L125 148h19a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12v-48a12 12 0 0 1 24 0v19l43.51-43.52a12 12 0 0 1 16.98.03"></svg:path>`,
})
export class PhArrowCircleDownLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
