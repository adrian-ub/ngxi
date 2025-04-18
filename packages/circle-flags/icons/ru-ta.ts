import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsRuTaIcon],svg[circle-flags-ru-ta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsRuTa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsRuTa0)"><svg:path fill="#eee" d="m0 224l256-32l256 32v64l-256 32L0 288Z"></svg:path><svg:path fill="#496e2d" d="M0 0h512v224H0z"></svg:path><svg:path fill="#d80027" d="M0 288h512v224H0z"></svg:path></svg:g>`,
})
export class CircleFlagsRuTaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
