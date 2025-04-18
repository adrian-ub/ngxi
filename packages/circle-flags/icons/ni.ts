import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNiIcon],svg[circle-flags-ni-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNi0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNi0)"><svg:path fill="#338af3" d="M0 0h512v144.7l-41.4 111.7L512 367.3V512H0V367.3l41.5-107.9L0 144.7z"></svg:path><svg:path fill="#eee" d="M0 144.7h512v222.6H0z"></svg:path><svg:path fill="#ffda44" d="M256 178a78 78 0 1 0 0 156a78 78 0 0 0 0-156m0 122.5a44.5 44.5 0 1 1 0-89a44.5 44.5 0 0 1 0 89"></svg:path><svg:path fill="#0052b4" d="M294.6 267.1L256 256l-38.6 11.1l-12.8 22.3h102.8z"></svg:path><svg:path fill="#338af3" d="M256 200.3L230.3 245l25.7 11l25.7-11.1z"></svg:path><svg:path fill="#6da544" d="M217.4 267.1h77.2L281.7 245h-51.4z"></svg:path></svg:g>`,
})
export class CircleFlagsNiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
