import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTourRoundedIcon],svg[material-symbols-tour-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14v7q0 .425-.288.713T6 22t-.712-.288T5 21V3q0-.425.288-.712T6 2t.713.288T7 3v1h12.525q.525 0 .825.438t.1.937L19 9l1.45 3.625q.2.5-.1.938t-.825.437zm5.5-3q.825 0 1.413-.587T14.5 9t-.587-1.412T12.5 7t-1.412.588T10.5 9t.588 1.413T12.5 11"></svg:path>`,
})
export class MaterialSymbolsTourRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
