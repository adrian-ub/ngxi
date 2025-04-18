import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsAeIcon],svg[circle-flags-ae-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsAe0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsAe0)"><svg:path fill="#a2001d" d="M0 0h167l52.3 252L167 512H0z"></svg:path><svg:path fill="#eee" d="m167 167l170.8-44.6L512 167v178l-173.2 36.9L167 345z"></svg:path><svg:path fill="#6da544" d="M167 0h345v167H167z"></svg:path><svg:path fill="#333" d="M167 345h345v167H167z"></svg:path></svg:g>`,
})
export class CircleFlagsAeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
