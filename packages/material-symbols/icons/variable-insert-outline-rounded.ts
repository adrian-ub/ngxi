import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVariableInsertOutlineRoundedIcon],svg[material-symbols-variable-insert-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17q-.425 0-.712-.288T3 16V8q0-.425.288-.712T4 7h16q.425 0 .713.288T21 8v2q0 .425-.288.713T20 11t-.712-.288T19 10V9H5v6h8q.425 0 .713.288T14 16t-.288.713T13 17zm1-2V9zm13 1.425V18.5q0 .425-.288.713T17 19.5t-.712-.288T16 18.5V14q0-.425.288-.712T17 13h4.5q.425 0 .713.288T22.5 14t-.288.713T21.5 15h-2.1l2.9 2.875q.3.3.3.713t-.3.712t-.712.3t-.713-.3z"></svg:path>`,
})
export class MaterialSymbolsVariableInsertOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
