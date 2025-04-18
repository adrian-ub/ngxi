import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsBgIcon],svg[circle-flags-bg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsBg0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsBg0)"><svg:path fill="#496e2d" d="m0 166.9l258-31.7l254 31.7v178l-251.4 41.3L0 344.9z"></svg:path><svg:path fill="#eee" d="M0 0h512v166.9H0z"></svg:path><svg:path fill="#d80027" d="M0 344.9h512V512H0z"></svg:path></svg:g>`,
})
export class CircleFlagsBgIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
