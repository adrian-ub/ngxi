import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMfIcon],svg[circle-flags-mf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMf0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMf0)"><svg:path fill="#eee" d="M0 128V0h512v128L299 512h-86z"></svg:path><svg:circle cx="256" cy="213" r="57" fill="#ffda44"></svg:circle><svg:path fill="#eee" d="M185 213h142l-71 128Z"></svg:path><svg:path fill="#d80027" d="M256 341L142 235h228z"></svg:path><svg:path fill="#0052b4" d="m0 128l213 213v171H0Zm512 0L299 341v171h213z"></svg:path></svg:g>`,
})
export class CircleFlagsMfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
