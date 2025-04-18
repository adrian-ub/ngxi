import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMeasuringTapeIcon],svg[material-symbols-measuring-tape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20v-8.5q0-3.55 2.475-6.025T13.5 3t6.025 2.475T22 11.5t-2.475 6.025T13.5 20zm8.5-5q1.45 0 2.475-1.025T17 11.5t-1.025-2.475T13.5 8t-2.475 1.025T10 11.5t1.025 2.475T13.5 15m0-2q-.625 0-1.062-.437T12 11.5t.438-1.062T13.5 10t1.063.438T15 11.5t-.437 1.063T13.5 13M2 20v-5h2v5z"></svg:path>`,
})
export class MaterialSymbolsMeasuringTapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
