import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsUnderlineSolidIcon],svg[teenyicons-underline-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 7.5V1h1v6.5a3.5 3.5 0 1 0 7 0V1h1v6.5a4.5 4.5 0 0 1-9 0M13 13v1H2v-1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsUnderlineSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
