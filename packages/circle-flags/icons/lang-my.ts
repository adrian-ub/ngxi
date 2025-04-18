import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangMyIcon],svg[circle-flags-lang-my-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangMy0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangMy0)"><svg:path fill="#6da544" d="m0 167l253.8-19.3L512 167v178l-254.9 32.3L0 345z"></svg:path><svg:path fill="#ffda44" d="M0 0h512v167H0z"></svg:path><svg:path fill="#d80027" d="M0 345h512v167H0z"></svg:path><svg:path fill="#eee" d="M431.5 216.5h-134L256 89l-41.4 127.6h-134l108.3 78.8L147.5 423L256 345l108.5 78l-41.4-127.6z"></svg:path></svg:g>`,
})
export class CircleFlagsLangMyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
