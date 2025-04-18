import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSkullListIcon],svg[material-symbols-skull-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18v-1.95q-1.35-.8-2.175-2.137T1 11q0-2.575 1.925-4.288T7.5 5t4.575 1.713T14 11q0 1.575-.825 2.913T11 16.05V18zm1.5-6q.425 0 .713-.288T6.5 11t-.288-.712T5.5 10t-.712.288T4.5 11t.288.713T5.5 12m1 2h2l-1-2zm3-2q.425 0 .713-.288T10.5 11t-.288-.712T9.5 10t-.712.288T8.5 11t.288.713T9.5 12m5.5 1v-2h7v2zm0 4v-2h7v2zm0-8V7h7v2z"></svg:path>`,
})
export class MaterialSymbolsSkullListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
