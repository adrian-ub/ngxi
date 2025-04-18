import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDocsOutlineRoundedIcon],svg[material-symbols-docs-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13h6q.425 0 .713-.288T16 12t-.288-.712T15 11H9q-.425 0-.712.288T8 12t.288.713T9 13m0 3h6q.425 0 .713-.288T16 15t-.288-.712T15 14H9q-.425 0-.712.288T8 15t.288.713T9 16m0 3h3q.425 0 .713-.288T13 18t-.288-.712T12 17H9q-.425 0-.712.288T8 18t.288.713T9 19m-3 3q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h7.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762V20q0 .825-.587 1.413T18 22zM18 9h-3.5q-.625 0-1.062-.437T13 7.5V4H6v16h12zM6 4v5zv16z"></svg:path>`,
})
export class MaterialSymbolsDocsOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
