import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaBagIcon],svg[gala-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="16"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m 64,80 h 128 c 16,0 29.33333,16 32,32 l 16,96 c 2.66807,16.00842 -16,32 -32,32 H 48 C 32,240 13.33193,224.00842 16,208 L 32,112 C 34.666667,96 48,80 64,80 Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M 80,112 V 63.814079"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m 176,64 v 48"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M 19.090159,191.31828 H 236.90984"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M 176,64 C 176,48 166.70076,30.94703 151.90703,22.405869 137.1133,13.86471 118.88668,13.86471 104.09296,22.40587 89.299233,30.947031 80.000002,48 80,64"></svg:path><svg:rect width="80" height="16" x="16" y="240"></svg:rect></svg:g>`,
})
export class GalaBagIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
