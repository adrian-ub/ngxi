import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMinimiseSolidIcon],svg[teenyicons-minimise-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.854 1.854L10.707 5H13v1H9V2h1v2.293l3.146-3.147zM4.293 5L1.146 1.854l.708-.708L5 4.293V2h1v4H2V5zM2 9h4v4H5v-2.293l-3.146 3.147l-.708-.707L4.293 10H2zm7 0h4v1h-2.293l3.147 3.146l-.708.708L10 10.707V13H9z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMinimiseSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
