import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHardDriveOutlineSharpIcon],svg[material-symbols-hard-drive-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17h16v-6H4zm13-1.5q.625 0 1.063-.437T18.5 14t-.437-1.062T17 12.5t-1.062.438T15.5 14t.438 1.063T17 15.5M22 9h-2.825l-2-2H6.825l-2 2H2l4-4h12zM2 19V9h20v10z"></svg:path>`,
})
export class MaterialSymbolsHardDriveOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
