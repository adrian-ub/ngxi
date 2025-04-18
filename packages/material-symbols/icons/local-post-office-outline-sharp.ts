import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalPostOfficeOutlineSharpIcon],svg[material-symbols-local-post-office-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 19v3H2V12h4V8q0-2.5 1.75-4.25T12 2h4q2.5 0 4.25 1.75T22 8v14h-2v-3zm0-2h4V8q0-1.65-1.175-2.825T16 4h-4q-1.65 0-2.825 1.175T8 8v4h8zm-7-.15L14 14H4zm0 1.75l-5-2.85V20h10v-4.25zM4 14v6zm6-4V8h8v2z"></svg:path>`,
})
export class MaterialSymbolsLocalPostOfficeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
