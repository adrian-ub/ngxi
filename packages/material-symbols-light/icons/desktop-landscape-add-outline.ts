import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDesktopLandscapeAddOutlineIcon],svg[material-symbols-light-desktop-landscape-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18V6zv-.115zm2.385-2.384v-4.462h8.461v4.462zM4.615 19q-.69 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v5.769h-1v-5.77q0-.23-.192-.423T19.385 6H4.615q-.23 0-.423.192T4 6.616v10.769q0 .23.192.423t.423.192H13v1zm12.116-6.616V9.27H9v-.885h8.616v4zM18 21v-2.616h-2.615v-1H18V14.77h1v2.615h2.616v1H19V21z"></svg:path>`,
})
export class MaterialSymbolsLightDesktopLandscapeAddOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
