import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsEuroSolidIcon],svg[teenyicons-euro-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.174 5A6.503 6.503 0 0 1 13.78 2.708l-.812.584A5.502 5.502 0 0 0 3.207 5H7v1H3.022A6 6 0 0 0 3 6.5v2q0 .253.022.5H7v1H3.207a5.502 5.502 0 0 0 9.761 1.708l.812.584A6.503 6.503 0 0 1 2.174 10H0V9h2.019A7 7 0 0 1 2 8.5v-2q0-.252.019-.5H0V5z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsEuroSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
