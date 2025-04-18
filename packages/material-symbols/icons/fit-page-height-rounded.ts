import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitPageHeightRoundedIcon],svg[material-symbols-fit-page-height-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm4.2-13h3.6q.35 0 .475-.3t-.125-.55L12.7 6.7q-.3-.3-.7-.3t-.7.3L9.85 8.15q-.25.25-.125.55t.475.3m2.5 8.3l1.45-1.45q.25-.25.125-.55T13.8 15h-3.6q-.35 0-.475.3t.125.55l1.45 1.45q.3.3.7.3t.7-.3"></svg:path>`,
})
export class MaterialSymbolsFitPageHeightRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
