import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsScIcon],svg[circle-flags-sc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSc0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSc0)"><svg:path fill="#0052b4" d="M0 0v332l150.9-138.5L225.2 0z"></svg:path><svg:path fill="#ffda44" d="M273.1 253.3L512 0H225.2L0 332v80.2z"></svg:path><svg:path fill="#d80027" d="M512 0L0 412.2v50.4L277.9 390L512 256z"></svg:path><svg:path fill="#eee" d="M0 462.6L512 256v133.5l-223.9 78.8L0 488.4z"></svg:path><svg:path fill="#6da544" d="m512 389.5l-512 99V512h512z"></svg:path></svg:g>`,
})
export class CircleFlagsScIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
