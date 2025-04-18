import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMuIcon],svg[circle-flags-mu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMu0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMu0)"><svg:path fill="#6da544" d="m0 378.3l254-37.1l258 37V512H0z"></svg:path><svg:path fill="#ffda44" d="m0 256.1l252.2-33.3L512 256v122.4H0z"></svg:path><svg:path fill="#0052b4" d="M0 133.7L249.7 97L512 133.7v122.4H0z"></svg:path><svg:path fill="#d80027" d="M0 0h512v133.7H0z"></svg:path></svg:g>`,
})
export class CircleFlagsMuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
