import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBowlingBallLightIcon],svg[ph-bowling-ball-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m14-102a10 10 0 1 1-10-10a10 10 0 0 1 10 10m22-14a10 10 0 1 1 10-10a10 10 0 0 1-10 10m18 30a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhBowlingBallLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
