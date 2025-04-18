import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsTrendDownSolidIcon],svg[teenyicons-trend-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m.146 3.854l.708-.708L5 7.293l3-3l6 6V5h1v7H8v-1h5.293L8 5.707l-3 3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsTrendDownSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
