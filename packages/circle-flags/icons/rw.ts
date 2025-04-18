import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsRwIcon],svg[circle-flags-rw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsRw0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsRw0)"><svg:path fill="#496e2d" d="m0 378.5l254.1-22.1L512 378.5V512H0z"></svg:path><svg:path fill="#ffda44" d="m0 256.1l255-30.3l257 30.3v122.4H0z"></svg:path><svg:path fill="#338af3" d="M0 0h512v256H0z"></svg:path><svg:path fill="#ffda44" d="m289.4 150l31.3 14.6L304 195l34-6.5l4.3 34.3l23.6-25.2l23.7 25.2l4.3-34.3l34 6.5l-16.7-30.3l31.2-14.7l-31.2-14.7l16.6-30.3l-34 6.5l-4.2-34.3l-23.7 25.3l-23.6-25.3l-4.3 34.3l-34-6.5l16.7 30.3z"></svg:path></svg:g>`,
})
export class CircleFlagsRwIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
