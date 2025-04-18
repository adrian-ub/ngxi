import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsEtSiIcon],svg[circle-flags-et-si-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsEtSi0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsEtSi0)"><svg:path fill="#496e2d" d="M0 0h512v149H0Z"></svg:path><svg:path fill="#eee" d="M0 149h512v32H0z"></svg:path><svg:path fill="#d80027" d="M0 363h512v149H0Z"></svg:path><svg:path fill="#eee" d="M0 331h512v32H0z"></svg:path><svg:path fill="#0052b4" d="M0 181h512v150H0Z"></svg:path><svg:path fill="#eee" d="m312 317l104-75H288l104 75l-40-122zm-203-32l49-36H98l49 36l-19-58zm64 32l49-36h-60l49 36l-19-58Zm0-64l49-36h-60l49 36l-19-58Z"></svg:path></svg:g>`,
})
export class CircleFlagsEtSiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
