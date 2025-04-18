import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLocalParkingIcon],svg[material-symbols-light-local-parking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20V4h6q2.058 0 3.529 1.471T18 9t-1.471 3.529T13 14H9v6zm2-8h4.046q1.238 0 2.119-.881T16.046 9t-.881-2.119T13.046 6H9z"></svg:path>`,
})
export class MaterialSymbolsLightLocalParkingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
