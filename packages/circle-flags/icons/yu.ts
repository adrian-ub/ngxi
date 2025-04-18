import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsYuIcon],svg[circle-flags-yu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsYu0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsYu0)"><svg:path fill="#eee" d="m0 167l256-32l256 32v178l-256 32L0 345Z"></svg:path><svg:path fill="#d80027" d="M0 345h512v167H0Z"></svg:path><svg:path fill="#0052b4" d="M0 0h512v167H0Z"></svg:path><svg:path fill="#ffda44" d="m137 413l309-222H66l309 222L256 51Z"></svg:path><svg:path fill="#d80027" d="m183 350l189-136H140l188 136l-72-221z"></svg:path></svg:g>`,
})
export class CircleFlagsYuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
