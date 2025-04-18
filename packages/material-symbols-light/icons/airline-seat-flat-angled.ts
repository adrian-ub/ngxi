import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAirlineSeatFlatAngledIcon],svg[material-symbols-light-airline-seat-flat-angled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.698 12.09l1.708-4.69l7.45 2.71q1.171.42 1.707 1.543q.537 1.122.097 2.293l-.698 1.883zm-6.58.54l.347-.932l15.897 5.793l-.348.932zm3.65-1.772q-.874 0-1.485-.612q-.612-.611-.612-1.484q0-.874.611-1.485q.612-.611 1.485-.611t1.485.61t.611 1.486t-.611 1.484t-1.485.612"></svg:path>`,
})
export class MaterialSymbolsLightAirlineSeatFlatAngledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
