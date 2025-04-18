import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsGlIcon],svg[circle-flags-gl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsGl0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsGl0)"><svg:path fill="#d80027" d="m0 256l259-45.3L512 256v256H0z"></svg:path><svg:path fill="#eee" d="M0 0h512v256H0z"></svg:path><svg:path fill="#eee" d="M55.7 256a122.4 122.4 0 1 0 244.8 0l-123-24z"></svg:path><svg:path fill="#d80027" d="M55.7 256a122.4 122.4 0 1 1 244.8 0z"></svg:path></svg:g>`,
})
export class CircleFlagsGlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
