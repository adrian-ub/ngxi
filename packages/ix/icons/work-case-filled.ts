import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixWorkCaseFilledIcon],svg[ix-work-case-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 261.76a554.7 554.7 0 0 0 170.667 36.907v42.666h85.333v-42.666a601 601 0 0 0 170.667-36.054v164.054H42.667zM320 64l21.334 21.333V128h128v111.147a605.2 605.2 0 0 1-204.374 38.186H249.6A599.3 599.3 0 0 1 42.667 238.08V128h128V85.333L192 64zm-21.333 42.667h-85.333V128h85.333z"></svg:path>`,
})
export class IxWorkCaseFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
