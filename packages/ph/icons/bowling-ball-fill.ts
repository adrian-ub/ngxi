import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBowlingBallFillIcon],svg[ph-bowling-ball-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m4 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12m20-36a12 12 0 1 1 12 12a12 12 0 0 1-12-12m20 52a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhBowlingBallFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
