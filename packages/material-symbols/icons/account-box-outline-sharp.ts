import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAccountBoxOutlineSharpIcon],svg[material-symbols-account-box-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17.85q1.35-1.325 3.138-2.087T12 15t3.863.763T19 17.85V5H5zM12 13q1.45 0 2.475-1.025T15.5 9.5t-1.025-2.475T12 6T9.525 7.025T8.5 9.5t1.025 2.475T12 13m-9 8V3h18v18zm9-10q-.625 0-1.062-.437T10.5 9.5t.438-1.062T12 8t1.063.438T13.5 9.5t-.437 1.063T12 11m-5.275 8h10.55q-1.1-.975-2.487-1.487T12 17t-2.812.513T6.725 19"></svg:path>`,
})
export class MaterialSymbolsAccountBoxOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
