import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLocalPostOfficeOutlineSharpIcon],svg[material-symbols-light-local-post-office-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18v3H3v-8h4V8q0-2.083 1.458-3.542Q9.917 3 12 3h4q2.083 0 3.542 1.458Q21 5.917 21 8v13h-1v-3zm0-1h5V8q0-1.65-1.175-2.825T16 4h-4q-1.65 0-2.825 1.175T8 8v5h7zm-6-.15L14 14H4zm0 1.02l-5-2.85V20h10v-4.98zM4 14v6zm6.5-4.5v-1h7v1z"></svg:path>`,
})
export class MaterialSymbolsLightLocalPostOfficeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
