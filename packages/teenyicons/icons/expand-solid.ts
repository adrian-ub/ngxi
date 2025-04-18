import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsExpandSolidIcon],svg[teenyicons-expand-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 1h4v1H2.707l3.147 3.146l-.708.708L2 2.707V5H1zm11.293 1H10V1h4v4h-1V2.707L9.854 5.854l-.708-.708zm-6.44 7.854L2.708 13H5v1H1v-4h1v2.293l3.146-3.147zm4-.708L13 12.293V10h1v4h-4v-1h2.293L9.146 9.854z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsExpandSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
