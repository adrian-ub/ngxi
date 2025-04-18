import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsBoIcon],svg[circle-flags-bo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsBo0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsBo0)"><svg:path fill="#ffda44" d="m0 167l252.9-29.3L512 167v178l-255.7 25.7L0 345z"></svg:path><svg:path fill="#d80027" d="M0 0h512v167H0z"></svg:path><svg:path fill="#6da544" d="M0 345h512v167H0z"></svg:path></svg:g>`,
})
export class CircleFlagsBoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
