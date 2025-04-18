import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRewindCircleThinIcon],svg[ph-rewind-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92M117.79 88.42a4 4 0 0 0-4.19.38l-48 36a4 4 0 0 0 0 6.4l48 36a4 4 0 0 0 2.4.8a4.05 4.05 0 0 0 1.79-.42A4 4 0 0 0 120 164V92a4 4 0 0 0-2.21-3.58M112 156l-37.33-28L112 100Zm61.79-67.58a4 4 0 0 0-4.19.38l-48 36a4 4 0 0 0 0 6.4l48 36a4 4 0 0 0 2.4.8a4.05 4.05 0 0 0 1.79-.42A4 4 0 0 0 176 164V92a4 4 0 0 0-2.21-3.58M168 156l-37.33-28L168 100Z"></svg:path>`,
})
export class PhRewindCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
