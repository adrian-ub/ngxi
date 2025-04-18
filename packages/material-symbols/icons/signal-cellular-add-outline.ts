import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSignalCellularAddOutlineIcon],svg[material-symbols-signal-cellular-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22L21.975 2.025V12.65q-.45-.275-.95-.438t-1.05-.262v-5.1L6.825 20H13.2q.2.575.5 1.075t.675.925zm16 0v-3h-3v-2h3v-3h2v3h3v2h-3v3zM6.825 20l13.15-13.15l-3.412 3.413l-3.025 3.024l-3.088 3.088z"></svg:path>`,
})
export class MaterialSymbolsSignalCellularAddOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
