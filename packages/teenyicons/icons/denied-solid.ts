import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDeniedSolidIcon],svg[teenyicons-denied-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m2.564-4.23a6.5 6.5 0 0 0 9.165 9.165zm.707-.706l9.165 9.165a6.5 6.5 0 0 0-9.165-9.165" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsDeniedSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
