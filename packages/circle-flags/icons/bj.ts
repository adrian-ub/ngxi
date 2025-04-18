import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsBjIcon],svg[circle-flags-bj-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsBj0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsBj0)"><svg:path fill="#6da544" d="M0 0h189.2l54 257.6l-54 254.4H0z"></svg:path><svg:path fill="#ffda44" d="M189.2 0H512v256l-159 53.5L189.1 256z"></svg:path><svg:path fill="#d80027" d="M189.2 256H512v256H189.2z"></svg:path></svg:g>`,
})
export class CircleFlagsBjIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
