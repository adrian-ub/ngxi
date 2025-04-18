import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBarcodeSolidIcon],svg[teenyicons-barcode-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 13V2h1v11zm5 0V2h1v11zm2 0V2h1v11zm3 0V2h1v11zm4 0V2h1v11z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsBarcodeSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
