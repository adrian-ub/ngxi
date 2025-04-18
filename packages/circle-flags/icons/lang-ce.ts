import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangCeIcon],svg[circle-flags-lang-ce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangCe0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangCe0)"><svg:path fill="#d80027" d="m96 357l208-32l208 32v155H96l-32-78Z"></svg:path><svg:path fill="#496e2d" d="M96 0h416v293l-208 32l-208-32l-32-147Z"></svg:path><svg:path fill="#eee" d="M0 0v512h96V357h416v-64H96V0Z"></svg:path></svg:g>`,
})
export class CircleFlagsLangCeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
