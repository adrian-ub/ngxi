import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDollarOutlineIcon],svg[teenyicons-dollar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.5 10.5a3 3 0 0 0 3 3h4a3 3 0 1 0 0-6h-4a3 3 0 0 1 0-6h4a3 3 0 0 1 3 3M7.5 0v1.5m0 13.5v-1.5"></svg:path>`,
})
export class TeenyiconsDollarOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
