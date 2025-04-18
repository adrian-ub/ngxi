import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSheetsRtlIcon],svg[material-symbols-sheets-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 13q-.625 0-1.062-.437T4 11.5v-9q0-.625.438-1.062T5.5 1h13q.625 0 1.063.438T20 2.5v9q0 .625-.437 1.063T18.5 13zM6 6h5V3H6zm7 0h5V3h-5zm-2 5V8H6v3zm2 0h5V8h-5zM7 22l-4-4l4-4l1.4 1.4L6.825 17H20v2H6.825L8.4 20.6z"></svg:path>`,
})
export class MaterialSymbolsSheetsRtlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
