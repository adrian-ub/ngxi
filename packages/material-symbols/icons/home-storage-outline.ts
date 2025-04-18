import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHomeStorageOutlineIcon],svg[material-symbols-home-storage-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21L3 9h18l-2 12zm1.675-2h10.65l1.275-8H5.4zM10 15h4q.425 0 .713-.288T15 14t-.288-.712T14 13h-4q-.425 0-.712.288T9 14t.288.713T10 15M6 8q-.425 0-.712-.288T5 7t.288-.712T6 6h12q.425 0 .713.288T19 7t-.288.713T18 8zm2-3q-.425 0-.712-.288T7 4t.288-.712T8 3h8q.425 0 .713.288T17 4t-.288.713T16 5zM6.675 19h10.65z"></svg:path>`,
})
export class MaterialSymbolsHomeStorageOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
