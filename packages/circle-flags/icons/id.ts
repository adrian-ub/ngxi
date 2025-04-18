import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsIdIcon],svg[circle-flags-id-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsId0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsId0)"><svg:path fill="#eee" d="m0 256l249.6-41.3L512 256v256H0z"></svg:path><svg:path fill="#a2001d" d="M0 0h512v256H0z"></svg:path></svg:g>`,
})
export class CircleFlagsIdIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
