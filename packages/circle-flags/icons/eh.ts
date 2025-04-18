import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsEhIcon],svg[circle-flags-eh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsEh0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsEh0)"><svg:path fill="#eee" d="m90.1 144.8l210.5-27.7L512 144.8v222.6l-209 32.4l-213-32.4z"></svg:path><svg:path fill="#333" d="M0 0h512v144.8H28.2z"></svg:path><svg:path fill="#496e2d" d="M39.5 367.4H512V512H0z"></svg:path><svg:path fill="#d80027" d="M0 .1V512h.1L256 256.1zm365.1 178.1a78 78 0 1 0 18.9 154a78 78 0 0 1 0-152.2a78.2 78.2 0 0 0-18.9-1.8"></svg:path><svg:path fill="#d80027" d="m387.3 206.1l11 34h35.8l-29 21l11.1 34l-29-21l-28.9 21l11.1-34l-29-21h35.8z"></svg:path></svg:g>`,
})
export class CircleFlagsEhIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
