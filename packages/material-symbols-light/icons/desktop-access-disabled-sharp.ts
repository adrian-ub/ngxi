import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDesktopAccessDisabledSharpIcon],svg[material-symbols-light-desktop-access-disabled-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.462 21.492L15.969 17H13v2h2v1H9v-1h2v-2H3V4.04h1.425v1.416L1.777 2.808l.708-.708l18.684 18.685zm-.396-4.642L7.216 4H21v12.85z"></svg:path>`,
})
export class MaterialSymbolsLightDesktopAccessDisabledSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
