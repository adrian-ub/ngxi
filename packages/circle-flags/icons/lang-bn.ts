import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangBnIcon],svg[circle-flags-lang-bn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangBn0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangBn0)"><svg:path fill="#496e2d" d="M0 0h512v512H0z"></svg:path><svg:circle cx="200.3" cy="256" r="111.3" fill="#d80027"></svg:circle></svg:g>`,
})
export class CircleFlagsLangBnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
