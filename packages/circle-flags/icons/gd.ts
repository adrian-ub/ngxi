import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsGdIcon],svg[circle-flags-gd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsGd0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsGd0)"><svg:path fill="#ffda44" d="M23.6 23.7h464.8v464.7H23.6z"></svg:path><svg:path fill="#496e2d" d="M0 75.1L38 38l436.3 436.4l37.7-37.5V75l-39.6-35.5L40.2 471.8L0 436.8z"></svg:path><svg:circle cx="256" cy="256.1" r="89" fill="#a2001d"></svg:circle><svg:path fill="#ffda44" d="m256 167l20 61.5h64.6l-52.3 38l20 61.3l-52.3-38l-52.3 38l20-61.3l-52.3-38H236zM256 .2"></svg:path><svg:path fill="#a2001d" d="M0 0h512v75.1H0zm0 436.8h512v75.1H0z"></svg:path><svg:path fill="#ffda44" d="m256 28l4.1 12.7h13.5l-10.9 8l4.2 12.6l-10.9-7.9l-10.8 8l4.1-12.8l-10.9-8H252zm-62 0l4 12.7h13.5l-10.9 8l4.2 12.6l-10.9-7.9l-10.8 8l4.1-12.8l-10.8-8h13.4zm124 0l4.2 12.7h13.4l-10.8 8l4.1 12.6l-10.8-7.9l-10.9 8l4.2-12.8l-10.9-8H314zm-62 422.8l4.1 12.7h13.5l-10.9 8l4.2 12.7l-10.9-8l-10.8 8l4.1-12.8l-10.9-7.9H252zm-62 0l4 12.7h13.5l-10.9 8l4.2 12.7l-10.9-8l-10.8 8l4.1-12.8l-10.8-7.9h13.4zm124 0l4.2 12.7h13.4l-10.8 8l4.1 12.7l-10.8-8l-10.9 8l4.2-12.8l-10.9-7.9H314zm-240-199a22.3 22.3 0 0 1-37.6 23.9c-12-18.8-5-49.5-5-49.5S66 233 78 251.9z"></svg:path><svg:circle cx="65.1" cy="273.2" r="11.1" fill="#a2001d"></svg:circle></svg:g>`,
})
export class CircleFlagsGdIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
