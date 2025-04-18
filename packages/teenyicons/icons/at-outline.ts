import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsAtOutlineIcon],svg[teenyicons-at-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M10.5 7.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm0 0v1a2 2 0 1 0 4 0v-1a7 7 0 1 0-3 5.745"></svg:path>`,
})
export class TeenyiconsAtOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
