import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsKwIcon],svg[circle-flags-kw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsKw0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsKw0)"><svg:path fill="#eee" d="M138.4 147L512 167v178l-373.6 20z"></svg:path><svg:path fill="#6da544" d="m0 0l138.4 167H512V0z"></svg:path><svg:path fill="#d80027" d="m0 512l138.4-167H512v167z"></svg:path><svg:path fill="#333" d="M167 167L0 0v512l167-167z"></svg:path></svg:g>`,
})
export class CircleFlagsKwIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
