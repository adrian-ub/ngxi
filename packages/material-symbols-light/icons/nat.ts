import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNatIcon],svg[material-symbols-light-nat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.289 14.5q-1.039 0-1.77-.73T1.79 12t.73-1.77t1.77-.73q.898 0 1.583.563q.686.562.87 1.437h3.893v1H6.742q-.184.875-.87 1.438t-1.584.562m0-1q.618 0 1.059-.441q.442-.442.442-1.059t-.442-1.059t-1.059-.441t-1.058.441q-.441.442-.441 1.059t.44 1.059t1.06.441M5.404 21v-1q3.383 0 5.691-2.28q2.309-2.28 2.309-5.72t-2.309-5.72T5.404 4V3q3.771 0 6.308 2.494t2.68 6.006h5.893l-2.089-2.1l.708-.708L22.212 12l-3.308 3.308l-.708-.708l2.089-2.1h-5.893q-.144 3.512-2.68 6.006T5.404 21"></svg:path>`,
})
export class MaterialSymbolsLightNatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
