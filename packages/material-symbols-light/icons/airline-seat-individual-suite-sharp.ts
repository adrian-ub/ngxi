import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAirlineSeatIndividualSuiteSharpIcon],svg[material-symbols-light-airline-seat-individual-suite-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16V8h1v7h8.5V8H22v8zm5.002-2.884q.883 0 1.498-.618t.616-1.5T8.498 9.5t-1.5-.615t-1.498.617t-.615 1.5t.617 1.498t1.5.616"></svg:path>`,
})
export class MaterialSymbolsLightAirlineSeatIndividualSuiteSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
