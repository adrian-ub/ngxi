import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVariableAddIcon],svg[material-symbols-variable-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17V7h18v3.075q-.25-.05-.488-.062T20 10q-2.5 0-4.25 1.75T14 16q0 .275.013.513t.062.487zm16 3v-3h-3v-2h3v-3h2v3h3v2h-3v3z"></svg:path>`,
})
export class MaterialSymbolsVariableAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
