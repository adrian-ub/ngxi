import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsAuAboriginalIcon],svg[circle-flags-au-aboriginal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsAuAboriginal0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsAuAboriginal0)"><svg:path fill="#333" d="M0 0h512v256l-256 32L0 256Z"></svg:path><svg:path fill="#d80027" d="M0 256h512v256H0Z"></svg:path><svg:circle cx="256" cy="256" r="128" fill="#ffda44"></svg:circle></svg:g>`,
})
export class CircleFlagsAuAboriginalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
