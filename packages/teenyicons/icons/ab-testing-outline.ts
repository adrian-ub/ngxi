import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsAbTestingOutlineIcon],svg[teenyicons-ab-testing-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1.5 11V6.5a2 2 0 1 1 4 0V11m-4-2.5h4m6.5-1H9.5m2.5 0a1.5 1.5 0 0 0 0-3H9.5v3m2.5 0a1.5 1.5 0 0 1 0 3H9.5v-3M7.5 1v13"></svg:path>`,
})
export class TeenyiconsAbTestingOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
