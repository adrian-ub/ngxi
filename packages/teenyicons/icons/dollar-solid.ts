import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDollarSolidIcon],svg[teenyicons-dollar-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 1V0h1v1h1.5A3.5 3.5 0 0 1 13 4.5h-1A2.5 2.5 0 0 0 9.5 2h-4a2.5 2.5 0 0 0 0 5h4a3.5 3.5 0 1 1 0 7H8v1H7v-1H5.5A3.5 3.5 0 0 1 2 10.5h1A2.5 2.5 0 0 0 5.5 13h4a2.5 2.5 0 0 0 0-5h-4a3.5 3.5 0 1 1 0-7z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsDollarSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
