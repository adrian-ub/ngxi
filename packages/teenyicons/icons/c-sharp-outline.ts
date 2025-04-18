import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsCSharpOutlineIcon],svg[teenyicons-c-sharp-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M9.5 5v5m2-5v5M8 6.5h5m-5 2h5M8 10l-.402.201A2.83 2.83 0 0 1 3.5 7.668v-.336a2.832 2.832 0 0 1 4.098-2.533L8 5m-6.5 5.5v-6l6-3.5l6 3.5v6l-6 3.5z"></svg:path>`,
})
export class TeenyiconsCSharpOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
