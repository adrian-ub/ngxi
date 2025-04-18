import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsFlIcon],svg[circle-flags-us-fl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsFl0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsFl0)"><svg:path fill="#eee" d="M0 68L68 0h376l68 68v376l-68 68H68L0 444Z"></svg:path><svg:path fill="#d80027" d="M0 0v68l188 188L0 444v68h68l188-188l188 188h68v-68L324 256L512 68V0h-68L256 188L68 0Z"></svg:path><svg:circle cx="256" cy="256" r="96" fill="#ff9811"></svg:circle><svg:circle cx="256" cy="256" r="64" fill="#6da544"></svg:circle></svg:g>`,
})
export class CircleFlagsUsFlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
