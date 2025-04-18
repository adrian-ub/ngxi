import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleRightThinIcon],svg[ph-arrow-circle-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m42.83-94.83a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66-5.66L158.34 132H88a4 4 0 0 1 0-8h70.34l-25.17-25.17a4 4 0 0 1 5.66-5.66Z"></svg:path>`,
})
export class PhArrowCircleRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
