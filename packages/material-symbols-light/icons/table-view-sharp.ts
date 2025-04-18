import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableViewSharpIcon],svg[material-symbols-light-table-view-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.385 21h6.807v-4.384H6.385zm7.807 0H21v-4.384h-6.808zM3 17.23V3h14.23v1H4v13.23zm3.385-1.614h6.807v-4.424H6.385zm7.807 0H21v-4.424h-6.808zm-7.807-5.424H21V6.385H6.385z"></svg:path>`,
})
export class MaterialSymbolsLightTableViewSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
