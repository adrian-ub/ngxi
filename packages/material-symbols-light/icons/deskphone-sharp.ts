import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDeskphoneSharpIcon],svg[material-symbols-light-deskphone-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.52 19.116h2.192v-14h-2.193zM6.672 13.73h1.462v-1.462H6.673zm0 3h1.462v-1.462H6.673zm0-6.231h7.462v-3H6.673zm3 3.23h1.462v-1.46H9.673zm0 3h1.462v-1.46H9.673zm3-3h1.462v-1.46h-1.462zm0 3h1.462v-1.46h-1.462zm-8.384 2.386v-14h11.23v-1h4.193v16h-4.193v-1z"></svg:path>`,
})
export class MaterialSymbolsLightDeskphoneSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
