import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTlIcon],svg[circle-flags-tl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTl0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTl0)"><svg:path fill="#ffda44" d="m0 0l214 251.8L0 512l418-256z"></svg:path><svg:path fill="#d80027" d="M512 0H0l367.3 256L0 512h512z"></svg:path><svg:path fill="#333" d="M0 0v512l256-256z"></svg:path><svg:path fill="#eee" d="m71 197.4l39 36.8l47-25.6l-23 48.4l39 36.9l-53.2-7l-23 48.5l-9.9-52.7l-53.2-7l47.1-25.6z"></svg:path></svg:g>`,
})
export class CircleFlagsTlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
