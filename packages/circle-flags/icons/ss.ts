import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSsIcon],svg[circle-flags-ss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSs0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSs0)"><svg:path fill="#eee" d="M74.1 115L512 156.9v31.5l-42.4 70.3l42.4 64.2v31.5L74.1 386.8z"></svg:path><svg:path fill="#333" d="M0 0h512v156.8H50z"></svg:path><svg:path fill="#a2001d" d="M150.6 188.3H512v134.5H150.6z"></svg:path><svg:path fill="#496e2d" d="M50 354.3h462V512H0z"></svg:path><svg:path fill="#0052b4" d="M0 0v512l256-256z"></svg:path><svg:path fill="#ffda44" d="m83.4 192.4l31.2 43.6l51.2-16.3l-31.9 43.2l31.3 43.6l-51-16.9l-31.7 43.2l.3-53.7L32 262.2L83 246z"></svg:path></svg:g>`,
})
export class CircleFlagsSsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
