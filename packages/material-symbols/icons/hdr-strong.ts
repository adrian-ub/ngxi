import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHdrStrongIcon],svg[material-symbols-hdr-strong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16q-1.65 0-2.825-1.175T1 12t1.175-2.825T5 8t2.825 1.175T9 12t-1.175 2.825T5 16m0-2q.825 0 1.413-.587T7 12t-.587-1.412T5 10t-1.412.588T3 12t.588 1.413T5 14m12 4q-2.5 0-4.25-1.75T11 12t1.75-4.25T17 6t4.25 1.75T23 12t-1.75 4.25T17 18"></svg:path>`,
})
export class MaterialSymbolsHdrStrongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
