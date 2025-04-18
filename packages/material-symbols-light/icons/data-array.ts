import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDataArrayIcon],svg[material-symbols-light-data-array-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.423 19v-1H18V6h-2.577V5H19v14zM5 19V5h3.577v1H6v12h2.577v1z"></svg:path>`,
})
export class MaterialSymbolsLightDataArrayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
