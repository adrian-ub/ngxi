import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableViewOutlineSharpIcon],svg[material-symbols-light-table-view-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.385 21V6.385H21V21zm1-1h5.807v-3.904H7.385zm6.807 0H20v-3.904h-5.808zM3 17.23V3h14.23v1H4v13.23zm4.385-2.134h5.807v-3.923H7.385zm6.807 0H20v-3.923h-5.808zm-6.807-4.923H20V7.385H7.385z"></svg:path>`,
})
export class MaterialSymbolsLightTableViewOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
