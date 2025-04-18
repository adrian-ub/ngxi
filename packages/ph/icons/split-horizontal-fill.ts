import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSplitHorizontalFillIcon],svg[ph-split-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 48v160a8 8 0 0 1-16 0v-72H64v24a8 8 0 0 1-13.66 5.66l-32-32a8 8 0 0 1 0-11.32l32-32A8 8 0 0 1 64 96v24h32V48a8 8 0 0 1 16 0m125.66 74.34l-32-32A8 8 0 0 0 192 96v24h-32V48a8 8 0 0 0-16 0v160a8 8 0 0 0 16 0v-72h32v24a8 8 0 0 0 13.66 5.66l32-32a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhSplitHorizontalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
