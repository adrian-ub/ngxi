import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsCgIcon],svg[circle-flags-cg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsCg0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsCg0)"><svg:path fill="#ffda44" d="M384 0h128v128L352 352L128 512H0V384l160-224Z"></svg:path><svg:path fill="#6da544" d="M0 384L384 0H0Z"></svg:path><svg:path fill="#d80027" d="M512 128L128 512h384z"></svg:path></svg:g>`,
})
export class CircleFlagsCgIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
