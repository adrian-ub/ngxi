import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsEtSwIcon],svg[circle-flags-et-sw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsEtSw0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsEtSw0)"><svg:path fill="#6da544" d="M0 0h512v512H0Z"></svg:path><svg:path fill="#0052b4" d="M0 0v80l64 176L0 432v80l256-256Z"></svg:path><svg:path fill="#eee" d="M0 80v80l64 96l-64 96v80l176-176Z"></svg:path><svg:path fill="#ffda44" d="m344 317l104-75H320l104 75l-40-122z"></svg:path><svg:path fill="#d80027" d="M0 160v192l96-96z"></svg:path></svg:g>`,
})
export class CircleFlagsEtSwIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
