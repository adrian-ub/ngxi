import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLcIcon],svg[circle-flags-lc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLc0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLc0)"><svg:path fill="#338af3" d="M0 0h512v512H0z"></svg:path><svg:path fill="#eee" d="M161.4 345h189.2L256 122.4z"></svg:path><svg:path fill="#333" d="M194.3 322.8L256 182.4l61.7 140.4z"></svg:path><svg:path fill="#ffda44" d="M161.4 345h189.2L256 256z"></svg:path></svg:g>`,
})
export class CircleFlagsLcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
