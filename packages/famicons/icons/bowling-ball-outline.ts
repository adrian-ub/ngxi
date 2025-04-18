import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsBowlingBallOutlineIcon],svg[famicons-bowling-ball-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="288" cy="200" r="24" fill="currentColor"></svg:circle><svg:circle cx="296" cy="128" r="24" fill="currentColor"></svg:circle><svg:circle cx="360" cy="168" r="24" fill="currentColor"></svg:circle>`,
})
export class FamiconsBowlingBallOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
