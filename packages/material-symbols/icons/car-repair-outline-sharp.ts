import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCarRepairOutlineSharpIcon],svg[material-symbols-car-repair-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22v-3H4v-2h16v2h-7v3zM9 11.5q.425 0 .713-.288T10 10.5t-.288-.712T9 9.5t-.712.288T8 10.5t.288.713T9 11.5m6 0q.425 0 .713-.288T16 10.5t-.288-.712T15 9.5t-.712.288T14 10.5t.288.713t.712.287M5 8.6L6.925 3h10.15L19 8.6V16h-2v-2H7v2H5zM7.65 7h8.7l-.7-2h-7.3zM7 9v3zm0 3h10V9H7z"></svg:path>`,
})
export class MaterialSymbolsCarRepairOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
