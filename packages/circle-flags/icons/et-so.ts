import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsEtSoIcon],svg[circle-flags-et-so-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsEtSo0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsEtSo0)"><svg:path fill="#eee" d="m0 160l256-32l256 32v192l-256 32L0 352Z"></svg:path><svg:path fill="#496e2d" d="M0 0h512v160H0Z"></svg:path><svg:path fill="#d80027" d="M0 352h512v160H0Z"></svg:path><svg:path fill="#338af3" d="M0 0v512l256-256Z"></svg:path><svg:path fill="#eee" d="M132 168v176L28 202l168 54l-168 54Z"></svg:path></svg:g>`,
})
export class CircleFlagsEtSoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
