import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVariableAddRoundedIcon],svg[material-symbols-variable-add-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17q-.425 0-.712-.288T3 16V8q0-.425.288-.712T4 7h16q.425 0 .713.288T21 8v1.175q0 .35-.275.6T20.1 10q-1.225-.025-2.35.425t-2 1.325t-1.325 1.988T14 16.1q0 .35-.238.625t-.587.275zm15 0h-2q-.425 0-.712-.288T16 16t.288-.712T17 15h2v-2q0-.425.288-.712T20 12t.713.288T21 13v2h2q.425 0 .713.288T24 16t-.288.713T23 17h-2v2q0 .425-.288.713T20 20t-.712-.288T19 19z"></svg:path>`,
})
export class MaterialSymbolsVariableAddRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
