import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciRemoveMinusCircleIcon],svg[ci-remove-minus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h8m-4 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18"></svg:path>`,
})
export class CiRemoveMinusCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
