import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangQuIcon],svg[circle-flags-lang-qu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangQu0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangQu0)"><svg:path fill="#4a1f63" d="M0 512h512v-70l-256-32L0 442Z"></svg:path><svg:path fill="#0052b4" d="M0 442h512v-70l-256-32L0 372Z"></svg:path><svg:path fill="#d80027" d="M0 0h512v70l-256 32L0 70Z"></svg:path><svg:path fill="#ffda44" d="M0 70h512v70l-256 32L0 140Z"></svg:path><svg:path fill="#eee" d="M0 140h512v70l-32 46l32 46v70H0v-70l32-46l-32-46Z"></svg:path><svg:path fill="#496e2d" d="M0 210h512v92H0z"></svg:path></svg:g>`,
})
export class CircleFlagsLangQuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
