import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsEtAfIcon],svg[circle-flags-et-af-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsEtAf0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsEtAf0)"><svg:path fill="#eee" d="m0 160l256-32l256 32v192l-256 32L0 352Z"></svg:path><svg:path fill="#0052b4" d="M0 0h512v160H0Z"></svg:path><svg:path fill="#496e2d" d="M0 352h512v160H0Z"></svg:path><svg:path fill="#d80027" d="M0 0v512l256-256z"></svg:path><svg:path fill="#ff9811" d="m345 229l-12 11l40 40l-40 40l11 11l40-40l40 40l11-11l-40-40l40-40l-11-11l-40 40z"></svg:path><svg:path fill="#d80027" d="m384 181l21 62l-54-38h66l-53 39z"></svg:path></svg:g>`,
})
export class CircleFlagsEtAfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
