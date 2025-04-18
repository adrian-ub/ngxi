import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsArrowDownSmallSolidIcon],svg[teenyicons-arrow-down-small-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 4v5.293l1.5-1.5l.707.707L7.5 11.207L4.793 8.5l.707-.707l1.5 1.5V4z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsArrowDownSmallSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
