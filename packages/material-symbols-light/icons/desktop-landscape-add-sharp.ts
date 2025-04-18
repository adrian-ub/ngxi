import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDesktopLandscapeAddSharpIcon],svg[material-symbols-light-desktop-landscape-add-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h18v7.986q-.554-.298-1.182-.45q-.628-.151-1.318-.151q-.237 0-.453.012t-.432.063V8.384H9v.885h7.73v3.416q-.54.18-1.008.456t-.876.634v-2.621H6.385v4.462h7.119q-.252.513-.378 1.083T13 17.89q0 .295.03.57q.031.273.103.54zm15 2v-2.616h-2.615v-1H18V14.77h1v2.615h2.616v1H19V21z"></svg:path>`,
})
export class MaterialSymbolsLightDesktopLandscapeAddSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
