import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsCoIcon],svg[circle-flags-co-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsCo0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsCo0)"><svg:path fill="#d80027" d="m0 384l255.8-29.7L512 384v128H0z"></svg:path><svg:path fill="#0052b4" d="m0 256l259.5-31L512 256v128H0z"></svg:path><svg:path fill="#ffda44" d="M0 0h512v256H0z"></svg:path></svg:g>`,
})
export class CircleFlagsCoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
