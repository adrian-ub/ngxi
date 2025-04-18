import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPhonelinkEraseIcon],svg[material-symbols-light-phonelink-erase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.9 15.308l-.708-.708l2.6-2.6l-2.6-2.6l.708-.708l2.6 2.6l2.6-2.6l.708.708l-2.6 2.6l2.6 2.6l-.708.708l-2.6-2.6zM6.616 22q-.667 0-1.141-.475T5 20.386V3.615q0-.666.475-1.14T6.615 2h8.77q.666 0 1.14.475T17 3.614v3.308h-1V5.5H6v13h10v-1.423h1v3.298q0 .68-.475 1.153q-.474.472-1.14.472z"></svg:path>`,
})
export class MaterialSymbolsLightPhonelinkEraseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
