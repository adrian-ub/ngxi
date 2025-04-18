import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHdrWeakIcon],svg[material-symbols-hdr-weak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16q-1.65 0-2.825-1.175T1 12t1.175-2.825T5 8t2.825 1.175T9 12t-1.175 2.825T5 16m12 2q-2.5 0-4.25-1.75T11 12t1.75-4.25T17 6t4.25 1.75T23 12t-1.75 4.25T17 18m0-2q1.65 0 2.825-1.175T21 12t-1.175-2.825T17 8t-2.825 1.175T13 12t1.175 2.825T17 16"></svg:path>`,
})
export class MaterialSymbolsHdrWeakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
