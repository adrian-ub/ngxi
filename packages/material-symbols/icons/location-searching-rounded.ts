import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocationSearchingRoundedIcon],svg[material-symbols-location-searching-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22v-1q-3.125-.35-5.363-2.588T3.05 13.05h-1q-.425 0-.712-.288t-.288-.712t.288-.712t.712-.288h1q.35-3.125 2.588-5.363T11 3.1v-1q0-.425.288-.712T12 1.1t.713.288T13 2.1v1q3.125.35 5.363 2.588t2.587 5.362h1q.425 0 .713.288t.287.712t-.287.713t-.713.287h-1q-.35 3.125-2.587 5.363T13 21v1q0 .425-.288.713T12 23t-.712-.288T11 22m1-2.95q2.9 0 4.95-2.05T19 12.05T16.95 7.1T12 5.05T7.05 7.1T5 12.05T7.05 17T12 19.05"></svg:path>`,
})
export class MaterialSymbolsLocationSearchingRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
