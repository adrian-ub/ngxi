import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightIcecreamIcon],svg[material-symbols-light-icecream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.05 20.846l-4.123-8.038q-1.39.517-2.659-.362T4 10q0-.967.603-1.81q.603-.842 1.882-1.21q.315-2.332 1.92-3.656T12 2t3.595 1.324t1.92 3.657q1.28.367 1.882 1.21Q20 9.033 20 10q0 1.587-1.22 2.427t-2.618.38zm0-2.196l3.2-6.25l-.27-.23q-.772.396-1.54.613Q12.674 13 12 13q-.598 0-1.353-.188q-.755-.189-1.54-.643l-.268.231z"></svg:path>`,
})
export class MaterialSymbolsLightIcecreamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
