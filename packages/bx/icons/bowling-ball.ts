import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBowlingBallIcon],svg[bx-bowling-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:circle cx="7.5" cy="10.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="10.5" cy="7.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="11.5" cy="11.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class BxBowlingBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
