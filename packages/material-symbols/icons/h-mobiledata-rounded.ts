import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHMobiledataRoundedIcon],svg[material-symbols-h-mobiledata-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13v3q0 .425-.288.713T8 17t-.712-.288T7 16V8q0-.425.288-.712T8 7t.713.288T9 8v3h6V8q0-.425.288-.712T16 7t.713.288T17 8v8q0 .425-.288.713T16 17t-.712-.288T15 16v-3z"></svg:path>`,
})
export class MaterialSymbolsHMobiledataRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
