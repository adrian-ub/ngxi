import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilBowlingBallIcon],svg[uil-bowling-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.992 8.002a1 1 0 1 0 1 1a1 1 0 0 0-1-1m4-6a10 10 0 1 0 10 10a10.01 10.01 0 0 0-10-10m0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8m-1-10a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path>`,
})
export class UilBowlingBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
