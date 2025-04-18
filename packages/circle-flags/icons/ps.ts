import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPsIcon],svg[circle-flags-ps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPs0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPs0)"><svg:path fill="#eee" d="M41.3 121.9L512 167v178L43.8 391.3z"></svg:path><svg:path fill="#333" d="M0 0h512v167H111z"></svg:path><svg:path fill="#6da544" d="M111 345h401v167H0z"></svg:path><svg:path fill="#d80027" d="M0 0v512l256-256z"></svg:path></svg:g>`,
})
export class CircleFlagsPsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
