import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddColumnLeftOutlineIcon],svg[material-symbols-light-add-column-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19V5h-6.558v14zM5 20v-3.116h1V19h6.442V5H6v2.116H5V4h16v16zm8.442-8h-1zM5 14.5v-2H3v-1h2v-2h1v2h2v1H6v2z"></svg:path>`,
})
export class MaterialSymbolsLightAddColumnLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
