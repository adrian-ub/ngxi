import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangLusIcon],svg[circle-flags-lang-lus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangLus0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangLus0)"><svg:path fill="#eee" d="M0 0h512v256l-256 32L0 256Z"></svg:path><svg:path fill="#338af3" d="M0 256h512v256H0Z"></svg:path><svg:circle cx="256" cy="256" r="128" fill="#d80027"></svg:circle></svg:g>`,
})
export class CircleFlagsLangLusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
