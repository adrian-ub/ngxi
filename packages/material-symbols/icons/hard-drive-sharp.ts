import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHardDriveSharpIcon],svg[material-symbols-hard-drive-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 16q.625 0 1.063-.437T18.5 14.5t-.437-1.062T17 13t-1.062.438T15.5 14.5t.438 1.063T17 16m5-7H2l4-4h12zM2 19v-8h20v8z"></svg:path>`,
})
export class MaterialSymbolsHardDriveSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
