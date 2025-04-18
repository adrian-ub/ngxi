import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsCwIcon],svg[circle-flags-cw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsCw0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsCw0)"><svg:path fill="#0052b4" d="M0 0h512v342.3l-22 34.2l22 32.5v103H0V409l25.4-31L0 342.2z"></svg:path><svg:path fill="#eee" d="m175.2 164.2l13.8 42.5h44.7L197.6 233l13.8 42.5l-36.2-26.3l-36.1 26.3l13.8-42.5l-36.2-26.3h44.7zm-76.7-44.5l8.2 25.5h26.9L111.9 161l8.3 25.5l-21.7-15.7l-21.7 15.7L85 161l-21.7-15.7h26.9z"></svg:path><svg:path fill="#ffda44" d="M0 342.3h512V409H0z"></svg:path></svg:g>`,
})
export class CircleFlagsCwIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
