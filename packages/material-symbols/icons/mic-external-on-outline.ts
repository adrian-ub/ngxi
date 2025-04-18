import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMicExternalOnOutlineIcon],svg[material-symbols-mic-external-on-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.8 7q-.375-.425-.587-.925T4 5q0-1.25.875-2.125T7 2t2.125.875T10 5q0 .575-.213 1.075T9.2 7zM10 22q-1.65 0-2.825-1.175T6 18H5L4 8h6L9 18H8q0 .825.588 1.413T10 20t1.413-.587T12 18V6q0-1.65 1.175-2.825T16 2t2.825 1.175T20 6v16h-2V6q0-.825-.587-1.412T16 4t-1.412.588T14 6v12q0 1.65-1.175 2.825T10 22m-3.2-6h.4l.6-6H6.2zm.4-6h-1h1.6z"></svg:path>`,
})
export class MaterialSymbolsMicExternalOnOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
