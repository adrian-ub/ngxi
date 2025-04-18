import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineStyleIcon],svg[material-symbols-light-line-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 18.27v-1h1v1zm0-3v-1h3.327v1zm0-3v-1H11v1zm0-3V5.73h13v3.54zm3 9v-1h1v1zm1.827-3v-1h3.327v1zm1.173 3v-1h1v1zm1.5-6v-1h5.5v1zm1.5 6v-1h1v1zm.654-3v-1H18.5v1zm2.346 3v-1h1v1z"></svg:path>`,
})
export class MaterialSymbolsLightLineStyleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
