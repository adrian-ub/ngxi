import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLgbtTransgenderIcon],svg[circle-flags-lgbt-transgender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLgbtTransgender0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLgbtTransgender0)"><svg:path fill="#338af3" d="m0 410l256-32l256 32v102H0Z"></svg:path><svg:path fill="#f5a9b8" d="m0 308l256-32l256 32v102H0Z"></svg:path><svg:path fill="#eee" d="m0 204l256-32l256 32v104H0Z"></svg:path><svg:path fill="#f5a9b8" d="m0 102l256-32l256 32v102H0Z"></svg:path><svg:path fill="#338af3" d="M0 0h512v102H0z"></svg:path></svg:g>`,
})
export class CircleFlagsLgbtTransgenderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
