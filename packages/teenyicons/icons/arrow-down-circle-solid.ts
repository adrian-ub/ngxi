import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsArrowDownCircleSolidIcon],svg[teenyicons-arrow-down-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 0a7.5 7.5 0 1 1 0 15a7.5 7.5 0 0 1 0-15m2.707 8.5L7.5 11.207L4.793 8.5l.707-.707l1.5 1.5V4h1v5.293l1.5-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsArrowDownCircleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
