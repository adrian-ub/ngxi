import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalParkingRoundedIcon],svg[material-symbols-local-parking-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 15v4q0 .825-.587 1.413T8 21t-1.412-.587T6 19V5q0-.825.588-1.412T8 3h5q2.5 0 4.25 1.75T19 9t-1.75 4.25T13 15zm0-4h3.2q.825 0 1.413-.587T15.2 9t-.587-1.412T13.2 7H10z"></svg:path>`,
})
export class MaterialSymbolsLocalParkingRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
