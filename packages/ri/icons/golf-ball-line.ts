import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGolfBallLineIcon],svg[ri-golf-ball-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20a8 8 0 1 1 0-16a8 8 0 0 1 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m2-15a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiGolfBallLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
