import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLastPageIcon],svg[material-symbols-light-last-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 17.308l-.708-.708l4.6-4.6l-4.6-4.6L7 6.692L12.308 12zm9.5.192v-11h1v11z"></svg:path>`,
})
export class MaterialSymbolsLightLastPageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
