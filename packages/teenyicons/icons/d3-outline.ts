import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsD3OutlineIcon],svg[teenyicons-d3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M0 1.5h1.5a6 6 0 1 1 0 12H0m7-12h4.5a3 3 0 1 1 0 6m0 0H9m2.5 0h-2m2 0a3 3 0 1 1 0 6H7"></svg:path>`,
})
export class TeenyiconsD3OutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
