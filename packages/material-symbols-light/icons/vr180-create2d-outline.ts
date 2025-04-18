import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVr180Create2dOutlineIcon],svg[material-symbols-light-vr180-create2d-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16.712q-2.252-.656-3.626-2.511T3 10q0-2.927 2.036-4.963T10 3q2.346 0 4.201 1.374T16.711 8H15.65Q15 6.2 13.463 5.1T10 4Q7.5 4 5.75 5.75T4 10q0 1.925 1.1 3.463T8 15.65zM12 21q-.69 0-1.153-.462t-.462-1.153V12q0-.69.462-1.153T12 10.385h7.385q.69 0 1.153.462T21 12v7.385q0 .69-.462 1.152T19.385 21zm0-1h7.385q.23 0 .423-.192t.192-.424V12q0-.23-.192-.423q-.193-.192-.424-.192H12q-.23 0-.423.192t-.192.423v7.385q0 .23.192.423T12 20m.577-1.192h6.23l-1.915-2.5l-1.7 2.25l-1.2-1.65zM9.825 9.825"></svg:path>`,
})
export class MaterialSymbolsLightVr180Create2dOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
