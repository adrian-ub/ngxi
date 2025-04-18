import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBrushOutlineSharpIcon],svg[material-symbols-brush-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21q-1.125 0-2.225-.55T2 19q.65 0 1.325-.513T4 17q0-1.25.875-2.125T7 14t2.125.875T10 17q0 1.65-1.175 2.825T6 21m0-2q.825 0 1.412-.587T8 17q0-.425-.288-.712T7 16t-.712.288T6 17q0 .575-.137 1.05t-.363.9q.125.05.25.05zm5.75-4L9 12.25l9.65-9.65l2.75 2.75zM7 17"></svg:path>`,
})
export class MaterialSymbolsBrushOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
