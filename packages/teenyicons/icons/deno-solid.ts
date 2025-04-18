import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDenoSolidIcon],svg[teenyicons-deno-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7H6V6h1z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 0a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M8 13.981a6.46 6.46 0 0 0 2.971-.985l-.287-5.167A2.995 2.995 0 0 0 7.694 5H6a2 2 0 0 0-1.732 1H5v1H4a2 2 0 0 0 2 2h.882c.496 0 .95-.28 1.17-.724l.895.448A2.3 2.3 0 0 1 8 9.71z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsDenoSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
