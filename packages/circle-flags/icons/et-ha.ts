import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsEtHaIcon],svg[circle-flags-et-ha-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsEtHa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsEtHa0)"><svg:path fill="#eee" d="M0 0h512v64l-32 48l32 48v192l-32 48l32 48v64H0v-64l32-48l-32-48V160l32-48L0 64Z"></svg:path><svg:path fill="#d80027" d="M0 64h512v96H0z"></svg:path><svg:path fill="#6da544" d="M0 352h512v96H0z"></svg:path><svg:circle cx="256" cy="256" r="72" fill="#338af3"></svg:circle></svg:g>`,
})
export class CircleFlagsEtHaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
