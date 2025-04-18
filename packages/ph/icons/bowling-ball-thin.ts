import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBowlingBallThinIcon],svg[ph-bowling-ball-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m12-104a8 8 0 1 1-8-8a8 8 0 0 1 8 8m24-16a8 8 0 1 1 8-8a8 8 0 0 1-8 8m16 32a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhBowlingBallThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
