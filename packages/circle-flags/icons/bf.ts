import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsBfIcon],svg[circle-flags-bf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsBf0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsBf0)"><svg:path fill="#d80027" d="M0 0h512v256l-255.2 48L0 256z"></svg:path><svg:path fill="#6da544" d="M0 256h512v256H0z"></svg:path><svg:path fill="#ffda44" d="m256 167l19.3 59.5H338l-50.6 36.8l19.3 59.5L256 286l-50.6 36.8l19.3-59.5l-50.6-36.8h62.6z"></svg:path></svg:g>`,
})
export class CircleFlagsBfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
