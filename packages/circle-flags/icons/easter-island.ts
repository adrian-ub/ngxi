import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsEasterIslandIcon],svg[circle-flags-easter-island-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsEasterIsland0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsEasterIsland0)"><svg:path fill="#eee" d="M0 0h512v512H0z"></svg:path><svg:path fill="#d80027" d="M334 211.5v22.2h30.5a134.2 134.2 0 0 1-49.5 42a27.7 27.7 0 0 0-47.2 13.2a135 135 0 0 1-23.6 0a27.8 27.8 0 0 0-47.2-13.2a134.2 134.2 0 0 1-49.5-42h30.6v-22.2h-78a155.8 155.8 0 0 0 311.7 0z"></svg:path></svg:g>`,
})
export class CircleFlagsEasterIslandIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
