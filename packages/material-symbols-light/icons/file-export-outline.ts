import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFileExportOutlineIcon],svg[material-symbols-light-file-export-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.454 21.664l-.688-.714l3.45-3.45H5.234v-1h4.669v4.67h-1v-2.957zM12.289 21v-1h5.096q.269 0 .442-.173t.173-.442V8h-4V4H6.616q-.27 0-.443.173T6 4.616v9.5H5v-9.5q0-.672.472-1.144T6.616 3H14.5L19 7.5v11.885q0 .67-.472 1.143q-.472.472-1.143.472z"></svg:path>`,
})
export class MaterialSymbolsLightFileExportOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
