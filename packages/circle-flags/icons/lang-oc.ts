import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangOcIcon],svg[circle-flags-lang-oc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangOc0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangOc0)"><svg:path fill="#d80027" d="M0 0h512v512H0z"></svg:path><svg:circle cx="256" cy="64" r="32" fill="#ffda44"></svg:circle><svg:circle cx="64" cy="256" r="32" fill="#ffda44"></svg:circle><svg:circle cx="448" cy="256" r="32" fill="#ffda44"></svg:circle><svg:circle cx="256" cy="448" r="32" fill="#ffda44"></svg:circle><svg:circle cx="352" cy="400" r="32" fill="#ffda44"></svg:circle><svg:circle cx="400" cy="352" r="32" fill="#ffda44"></svg:circle><svg:circle cx="352" cy="112" r="32" fill="#ffda44"></svg:circle><svg:circle cx="400" cy="160" r="32" fill="#ffda44"></svg:circle><svg:circle cx="160" cy="112" r="32" fill="#ffda44"></svg:circle><svg:circle cx="112" cy="160" r="32" fill="#ffda44"></svg:circle><svg:circle cx="112" cy="352" r="32" fill="#ffda44"></svg:circle><svg:circle cx="160" cy="400" r="32" fill="#ffda44"></svg:circle><svg:path fill="#ffda44" d="m256 60l-103 52l20 61l-61-20l-52 103l52 103l61-20l-20 61l103 52l103-52l-20-61l61 20l52-103l-52-103l-61 20l20-61zm0 36l64 32l-32 96l96-32l32 64l-32 64l-96-32l32 96l-64 32l-64-32l32-96l-96 32l-32-64l32-64l96 32l-32-96z"></svg:path></svg:g>`,
})
export class CircleFlagsLangOcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
