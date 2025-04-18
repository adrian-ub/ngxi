import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewAgendaOutlineSharpIcon],svg[material-symbols-light-view-agenda-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19.385v-6h16v6zm1-1h14v-4H5zm-1-7.77v-6h16v6zm1-1h14v-4H5zm0 4.77v4zm0-8.77v4z"></svg:path>`,
})
export class MaterialSymbolsLightViewAgendaOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
