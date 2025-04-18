import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDoorbell3pOutlineSharpIcon],svg[material-symbols-doorbell-3p-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22V2h14v20zm2-2h10V4H7zm5-1q.825 0 1.413-.587T14 17t-.587-1.412T12 15t-1.412.588T10 17t.588 1.413T12 19m0-1q-.425 0-.712-.288T11 17t.288-.712T12 16t.713.288T13 17t-.288.713T12 18m0-4.5q.45 0 .725-.275T13 12.5h-2q0 .45.275.725T12 13.5M8 12h8v-1h-1V8.7q0-1.125-.575-2.013T12.8 5.5V4.4h-1.6v1.1q-1.05.375-1.625 1.225T9 8.7V11H8zm-1 8V4z"></svg:path>`,
})
export class MaterialSymbolsDoorbell3pOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
