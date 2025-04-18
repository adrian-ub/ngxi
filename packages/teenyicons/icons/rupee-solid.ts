import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRupeeSolidIcon],svg[teenyicons-rupee-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1V0h11v1H8.329a4.5 4.5 0 0 1 1.644 3H13v1H9.973A4.5 4.5 0 0 1 5.5 9H3.852l5.973 5.12l-.65.76l-7-6A.5.5 0 0 1 2.5 8h3a3.5 3.5 0 0 0 3.465-3H2V4h6.965A3.5 3.5 0 0 0 5.5 1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsRupeeSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
