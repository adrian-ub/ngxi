import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangIaIcon],svg[circle-flags-lang-ia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangIa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangIa0)"><svg:path fill="#0052b4" d="M0 0h512v256H0z"></svg:path><svg:path fill="#d80027" d="M0 256h512v256H0z"></svg:path><svg:path fill="#eee" d="m256 0l48 208l208 48l-208 48l-48 208l-48-208L0 256l208-48Z"></svg:path></svg:g>`,
})
export class CircleFlagsLangIaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
