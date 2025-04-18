import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsArrowUpSmallSolidIcon],svg[teenyicons-arrow-up-small-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 3.793L10.207 6.5l-.707.707l-1.5-1.5V11H7V5.707l-1.5 1.5l-.707-.707z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsArrowUpSmallSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
