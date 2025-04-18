import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowsMoreDownIcon],svg[material-symbols-light-arrows-more-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20V10h1v9h9v1zm4-3.98v-10h1v9h9v1z"></svg:path>`,
})
export class MaterialSymbolsLightArrowsMoreDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
