import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsInterslavicIcon],svg[circle-flags-interslavic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsInterslavic0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsInterslavic0)"><svg:path fill="#eee" d="m512 512l-192-64l-64-192l64-192L512 0Z"></svg:path><svg:path fill="#ffda44" d="m0 512l192-64l64-192l-64-192L0 0Z"></svg:path><svg:path fill="#0052b4" d="m0 0l256 256L512 0Z"></svg:path><svg:path fill="#d80027" d="M512 512L256 256L0 512Z"></svg:path></svg:g>`,
})
export class CircleFlagsInterslavicIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
