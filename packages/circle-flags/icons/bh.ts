import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsBhIcon],svg[circle-flags-bh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsBh0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsBh0)"><svg:path fill="#eee" d="M0 0h182.5l88.1 268.5l-88 243.5H0z"></svg:path><svg:path fill="#d80027" d="m182.5 0l-82.3 42.7l82.3 42.7l-82.3 42.6l82.3 42.7l-82.3 42.7l82.3 42.6l-82.3 42.7l82.3 42.7l-82.3 42.6l82.3 42.7l-82.3 42.7l82.3 42.6H512V0z"></svg:path></svg:g>`,
})
export class CircleFlagsBhIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
