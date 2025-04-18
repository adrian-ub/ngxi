import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSheetsRtlSharpIcon],svg[material-symbols-light-sheets-rtl-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13V1h16v12zm2-7h5V3H6zm7 0h5V3h-5zm-7 5h5V8H6zm7 0h5V8h-5zM7 22l-4-4l4-4l1.4 1.4L6.825 17H20v2H6.825L8.4 20.6z"></svg:path>`,
})
export class MaterialSymbolsLightSheetsRtlSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
