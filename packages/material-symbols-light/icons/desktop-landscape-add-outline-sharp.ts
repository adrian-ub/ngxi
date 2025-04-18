import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDesktopLandscapeAddOutlineSharpIcon],svg[material-symbols-light-desktop-landscape-add-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18V6zm2.385-2.384v-4.462h8.461v4.462zM3 19V5h18v7.385h-1V6H4v12h9v1zm13.73-6.616V9.27H9v-.885h8.616v4zM18 21v-2.616h-2.615v-1H18V14.77h1v2.615h2.616v1H19V21z"></svg:path>`,
})
export class MaterialSymbolsLightDesktopLandscapeAddOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
