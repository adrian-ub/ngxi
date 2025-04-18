import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsStampSolidIcon],svg[teenyicons-stamp-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3.5a3.5 3.5 0 1 1 5 3.163V9h3.5a2.5 2.5 0 0 1 2.5 2.5V13H0v-1.5A2.5 2.5 0 0 1 2.5 9H6V6.663A3.5 3.5 0 0 1 4 3.5M0 14v1h15v-1z"></svg:path>`,
})
export class TeenyiconsStampSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
