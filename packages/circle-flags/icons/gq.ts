import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsGqIcon],svg[circle-flags-gq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsGq0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsGq0)"><svg:path fill="#eee" d="M41.3 121.9L512 167v178L43.8 391.3z"></svg:path><svg:path fill="#6da544" d="M0 0h512v167H111z"></svg:path><svg:path fill="#d80027" d="M111 345h401v167H0z"></svg:path><svg:path fill="#0052b4" d="M0 0v512l256-256z"></svg:path><svg:path fill="#ff9811" d="M334 257.1h22.2v32.3h-22.3z"></svg:path><svg:path fill="#6da544" d="M367.3 245a22.3 22.3 0 1 0-44.5 0a11.1 11.1 0 1 0 0 22.1h44.5a11.1 11.1 0 1 0 0-22.2z"></svg:path></svg:g>`,
})
export class CircleFlagsGqIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
