import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsD3SolidIcon],svg[teenyicons-d3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 2H0V1h1.5a6.5 6.5 0 0 1 0 13H0v-1h1.5a5.5 5.5 0 1 0 0-11m10 0H7V1h4.5a3.5 3.5 0 0 1 1.804 6.5A3.5 3.5 0 0 1 11.5 14H7v-1h4.5a2.5 2.5 0 0 0 0-5H9V7h2.5a2.5 2.5 0 0 0 0-5" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsD3SolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
