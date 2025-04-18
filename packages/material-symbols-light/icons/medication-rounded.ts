import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMedicationRoundedIcon],svg[material-symbols-light-medication-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.385 14v1.885q0 .256.18.435t.437.18t.435-.18t.179-.436V14H14.5q.257 0 .436-.18q.18-.18.18-.438q0-.257-.18-.435t-.436-.178h-1.884v-1.885q0-.256-.18-.435t-.438-.18t-.435.18t-.179.436v1.884H9.5q-.256 0-.436.18t-.18.438t.18.435T9.5 14zm-3.77 5.885q-.666 0-1.14-.475T6 18.27V8.5q0-.666.475-1.14q.474-.476 1.14-.476h8.77q.666 0 1.14.475Q18 7.834 18 8.5v9.77q0 .666-.475 1.14t-1.14.475zm-.653-14.77q-.213 0-.357-.143t-.143-.357t.143-.356t.357-.143h10.077q.212 0 .356.143q.143.144.143.357t-.143.356t-.357.144z"></svg:path>`,
})
export class MaterialSymbolsLightMedicationRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
