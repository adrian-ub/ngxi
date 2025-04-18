import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsBqBoIcon],svg[circle-flags-bq-bo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsBqBo0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsBqBo0)"><svg:path fill="#eee" d="M113.7 119.8L276 0h236v31.7L306 289.5L31.6 512H0V276z"></svg:path><svg:path fill="#ffda44" d="M0 0v276L276 0z"></svg:path><svg:path fill="#0052b4" d="M512 31.7L31.7 512H512z"></svg:path><svg:path fill="#333" d="m255 245.7l22.1-12l-22-12a78 78 0 0 0-65-65l-12-22l-12 22a78 78 0 0 0-65 65l-22 12l22 12a78 78 0 0 0 65 65l12 22.1l12-22a78 78 0 0 0 65-65zm-77 32.6a44.5 44.5 0 1 1 0-89a44.5 44.5 0 0 1 0 89"></svg:path><svg:path fill="#d80027" d="m178 200.3l9.7 16.7H207l-9.6 16.7l9.6 16.7h-19.3l-9.6 16.7l-9.7-16.7h-19.2l9.6-16.7l-9.6-16.7h19.2z"></svg:path></svg:g>`,
})
export class CircleFlagsBqBoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
