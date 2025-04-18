import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowsMoreUpIcon],svg[material-symbols-light-arrows-more-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18V9H4V8h10v10zm4-3.98v-9H8v-1h10v10z"></svg:path>`,
})
export class MaterialSymbolsLightArrowsMoreUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
