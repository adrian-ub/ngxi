import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDesktopLandscapeAddIcon],svg[material-symbols-light-desktop-landscape-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v6.37q-.554-.297-1.182-.45q-.628-.151-1.312-.151q-.237 0-.458.012t-.433.063V8.385H9v.884h7.73v3.416q-.54.18-1.008.456t-.876.634v-2.621H6.385v4.462h7.119q-.252.513-.378 1.083T13 17.89q0 .294.027.57t.106.54zM18 21v-2.616h-2.615v-1H18V14.77h1v2.615h2.616v1H19V21z"></svg:path>`,
})
export class MaterialSymbolsLightDesktopLandscapeAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
