import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangLbIcon],svg[circle-flags-lang-lb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangLb0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangLb0)"><svg:path fill="#eee" d="m0 167l253.8-19.3L512 167v178l-254.9 32.3L0 345z"></svg:path><svg:path fill="#d80027" d="M0 0h512v167H0z"></svg:path><svg:path fill="#338af3" d="M0 345h512v167H0z"></svg:path></svg:g>`,
})
export class CircleFlagsLangLbIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
