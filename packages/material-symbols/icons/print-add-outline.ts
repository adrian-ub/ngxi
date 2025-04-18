import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPrintAddOutlineIcon],svg[material-symbols-print-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 21v-3h-3v-2h3v-3h2v3h3v2h-3v3zM4 10h16zm2 11v-4H2v-6q0-1.275.875-2.137T5 8h14q1.275 0 2.138.863T22 11v.8q-.45-.25-.95-.437T20 11.1q0-.425-.288-.762T19 10H5q-.425 0-.712.288T4 11v4h2v-2h8.55q-.4.425-.7.925T13.35 15H8v4h5.35q.175.55.5 1.05t.7.95zM16 8V5H8v3H6V3h12v5z"></svg:path>`,
})
export class MaterialSymbolsPrintAddOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
