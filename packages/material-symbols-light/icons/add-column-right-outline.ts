import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddColumnRightOutlineIcon],svg[material-symbols-light-add-column-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v14h6.558V5zM3 20V4h16v3.116h-1V5h-6.442v14H18v-2.116h1V20zm7.558-8h1zM18 14.5v-2h-2v-1h2v-2h1v2h2v1h-2v2z"></svg:path>`,
})
export class MaterialSymbolsLightAddColumnRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
