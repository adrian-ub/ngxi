import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsArIcon],svg[circle-flags-us-ar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsAr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsAr0)"><svg:path fill="#d80027" d="M0 0h512v512H0z"></svg:path><svg:path fill="#0052b4" d="M256 70L5 256l251 186l251-186Z"></svg:path><svg:path fill="#eee" d="M256 130L85 256l171 126l171-126Zm-13.4-5.7l34.7-25h-42.7l34.7 25L256 83.7ZM46.5 277.4l27.2-33.1l-41.4 11.1l40.1 15L49 234.6Zm419 0l-27.2-33.1l41.4 11.1l-40.1 15l23.4-35.8zm-145.7-104l27.2-33.1l-41.4 11.1l40.1 15l-23.4-35.8zm70.3 52l27.2-33.1l-41.4 11.1l40.1 15l-23.4-35.8zm-197.9-52L165 140.3l41.4 11.1l-40.1 15l23.4-35.8zm-70.3 52l-27.2-33.1l41.4 11.1l-40.1 15l23.4-35.8zm-13 104l27.2-33.1l-41.5 11.1l40.2 15l-23.4-35.8zm70.3 52l27.2-33.1l-41.4 11.1l40.1 15l-23.4-35.8zm63.5 46.9l34.7-24.9h-42.7l34.7 24.9l-13.3-40.6zm160.4-98.9l-27.2-33.1l41.5 11.1l-40.2 15l23.4-35.8zm-70.3 52l-27.2-33.1l41.4 11.1l-40.1 15l23.4-35.8z"></svg:path><svg:path fill="#0052b4" d="m242.7 204.7l34.7-25h-42.7l34.7 25l-13.3-40.7zm-39.2 103l34.7-25h-42.7l34.7 25l-13.3-40.7zm78.2 0l34.7-25h-42.7l34.7 25l-13.3-40.7zm-39.1-4.4l34.7 25h-42.7l34.7-25L256 344ZM160 223h192v32H160z"></svg:path></svg:g>`,
})
export class CircleFlagsUsArIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
