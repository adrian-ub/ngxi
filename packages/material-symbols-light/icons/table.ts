import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableIcon],svg[material-symbols-light-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 14.885H4v3.5q0 .666.475 1.14t1.14.475H11.5zm1 0V20h5.885q.666 0 1.14-.475t.475-1.14v-3.5zm-1-1V8.769H4v5.116zm1 0H20V8.769h-7.5zM4 7.769h16V5.615q0-.666-.475-1.14T18.386 4H5.615q-.666 0-1.14.475T4 5.615z"></svg:path>`,
})
export class MaterialSymbolsLightTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
