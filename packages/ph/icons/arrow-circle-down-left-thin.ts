import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleDownLeftThinIcon],svg[ph-arrow-circle-down-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m34.83-126.83a4 4 0 0 1 0 5.66L105.66 156H144a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4v-48a4 4 0 0 1 8 0v38.34l57.17-57.17a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhArrowCircleDownLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
