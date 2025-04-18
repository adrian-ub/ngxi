import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsArrowLeftSmallSolidIcon],svg[teenyicons-arrow-left-small-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.207 5.5L5.707 7H11v1H5.707l1.5 1.5l-.707.707L3.793 7.5L6.5 4.793z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsArrowLeftSmallSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
