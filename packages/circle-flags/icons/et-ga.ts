import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsEtGaIcon],svg[circle-flags-et-ga-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsEtGa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsEtGa0)"><svg:path fill="#d80027" d="M0 0h512v128l-256 64L0 128Z"></svg:path><svg:path fill="#eee" d="M0 128h512v128l-256 64L0 256Z"></svg:path><svg:path fill="#496e2d" d="M0 256h512v128l-256 64L0 384Z"></svg:path><svg:path fill="#333" d="M0 384h512v128H0Zm221-139l91-65H200l91 65l-35-106z"></svg:path></svg:g>`,
})
export class CircleFlagsEtGaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
