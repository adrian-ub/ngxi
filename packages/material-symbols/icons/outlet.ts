import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsOutletIcon],svg[material-symbols-outlet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12q.425 0 .713-.288T10 11V8q0-.425-.288-.712T9 7t-.712.288T8 8v3q0 .425.288.713T9 12m1 6h4v-2q0-.825-.587-1.412T12 14t-1.412.588T10 16zm5-6q.425 0 .713-.288T16 11V8q0-.425-.288-.712T15 7t-.712.288T14 8v3q0 .425.288.713T15 12m-3 10q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsOutletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
