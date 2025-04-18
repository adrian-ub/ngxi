import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBeachBallFillIcon],svg[ph-beach-ball-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m83.44 76A196 196 0 0 0 165 91a196 196 0 0 0-9-46.44A88.43 88.43 0 0 1 211.44 100M85 51.24a188.3 188.3 0 0 1 67.3 39.21a196.3 196.3 0 0 0-112.22 34.06A88.07 88.07 0 0 1 85 51.24m46.48 164.68a196.3 196.3 0 0 0 34.06-112.23A188.3 188.3 0 0 1 204.76 171a88.07 88.07 0 0 1-73.27 44.92Z"></svg:path>`,
})
export class PhBeachBallFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
