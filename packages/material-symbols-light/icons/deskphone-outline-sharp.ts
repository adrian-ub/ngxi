import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDeskphoneOutlineSharpIcon],svg[material-symbols-light-deskphone-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.52 19.116h2.192v-14h-2.193zM6.672 13.73h1.462v-1.462H6.673zm0 3h1.462v-1.462H6.673zm0-6.231h7.462v-3H6.673zm3 3.23h1.462v-1.46H9.673zm0 3h1.462v-1.46H9.673zm3-3h1.462v-1.46h-1.462zm0 3h1.462v-1.46h-1.462zm2.846 1.386v-12H5.29v12zm-11.23 1v-14h11.23v-1h4.193v16h-4.193v-1zm1-1v-12z"></svg:path>`,
})
export class MaterialSymbolsLightDeskphoneOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
