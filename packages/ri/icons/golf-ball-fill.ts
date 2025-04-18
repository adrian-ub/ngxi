import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGolfBallFillIcon],svg[ri-golf-ball-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-8-5a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-1 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 1a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-1-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiGolfBallFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
