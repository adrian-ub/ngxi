import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLgbtIcon],svg[circle-flags-lgbt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLgbt0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLgbt0)"><svg:path fill="#9c27b0" d="m0 425l256-32l256 32v87H0Z"></svg:path><svg:path fill="#0052b4" d="m0 340l256-32l256 32v85H0Z"></svg:path><svg:path fill="#6da544" d="m0 255l256-32l256 32v85H0Z"></svg:path><svg:path fill="#ffda44" d="m0 170l256-32l256 32v85H0Z"></svg:path><svg:path fill="#ff9811" d="m0 85l256-32l256 32v85H0Z"></svg:path><svg:path fill="#d80027" d="M0 0h512v85H0z"></svg:path></svg:g>`,
})
export class CircleFlagsLgbtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
