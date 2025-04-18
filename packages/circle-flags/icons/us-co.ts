import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsCoIcon],svg[circle-flags-us-co-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsCo0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsCo0)"><svg:path fill="#0052b4" d="M0 0h512v167l-64 89l64 89v167H0V345l64-89l-64-89Z"></svg:path><svg:path fill="#eee" d="M0 167h512v178H0z"></svg:path><svg:path fill="#d80027" d="M344.3 299.8A128 128 0 0 1 201.8 382A128 128 0 0 1 96 256a128 128 0 0 1 105.8-126a128 128 0 0 1 142.5 82.2L224 256z"></svg:path><svg:circle cx="224" cy="256" r="64" fill="#ffda44"></svg:circle></svg:g>`,
})
export class CircleFlagsUsCoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
