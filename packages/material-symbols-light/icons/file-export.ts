import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFileExportIcon],svg[material-symbols-light-file-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.454 21.664l-.688-.714l3.45-3.45H5.234v-1h4.669v4.67h-1v-2.957zM12.289 21v-6.884H5v-9.5q0-.667.475-1.141T6.615 3H14.5L19 7.5v11.885q0 .666-.475 1.14t-1.14.475zM14 8h4l-4-4l4 4l-4-4z"></svg:path>`,
})
export class MaterialSymbolsLightFileExportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
