import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoFontIcon],svg[fontisto-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.106 0H1.895A1.895 1.895 0 0 0 0 1.895v4.924l-.001.053a1.895 1.895 0 0 0 3.79 0l-.001-.056v.003v-3.03h6.315v16.422H7.178a1.896 1.896 0 0 0-.002 3.79h9.645a1.896 1.896 0 0 0 .002-3.79h-2.929V3.789h6.315v3.03a1.896 1.896 0 0 0 3.79.002V1.894a1.895 1.895 0 0 0-1.894-1.895z"></svg:path>`,
})
export class FontistoFontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
