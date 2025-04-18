import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLbIcon],svg[circle-flags-lb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLb0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLb0)"><svg:path fill="#d80027" d="M0 0h512v144.8l-45.8 113L512 367.4V512H0V367.4l46.3-111.1L0 144.8z"></svg:path><svg:path fill="#eee" d="M0 144.8h512v222.6H0z"></svg:path><svg:path fill="#6da544" d="M322.8 300.5L256 178.1l-66.8 122.4h50.1V334h33.4v-33.4z"></svg:path></svg:g>`,
})
export class CircleFlagsLbIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
