import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShadowAddSharpIcon],svg[material-symbols-light-shadow-add-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 13.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zM3 21V7h3.616V3H21v14.385h-4V21zm4.616-4.615H20V4H7.616z"></svg:path>`,
})
export class MaterialSymbolsLightShadowAddSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
