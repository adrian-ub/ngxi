import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsGfIcon],svg[circle-flags-gf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsGf0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsGf0)"><svg:path fill="#6da544" d="m0 0l216.9 301.6L512 512V0z"></svg:path><svg:path fill="#ffda44" d="m0 0l512 512H0z"></svg:path><svg:path fill="#d80027" d="m256 121l90 270l-234-168h288L166 391z"></svg:path></svg:g>`,
})
export class CircleFlagsGfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
