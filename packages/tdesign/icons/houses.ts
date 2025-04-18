import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHousesIcon],svg[tdesign-houses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.996 1.658l10.416 9.259l-1.329 1.495L20 11.449v10.55H4V11.455l-1.094.957l-1.317-1.505l4.41-3.86V3H8v2.254zM6 9.704V20h3v-6h6v6h3V9.67l-5.996-5.33L7.66 8.252zM13 20v-4h-2v4z"></svg:path>`,
})
export class TdesignHousesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
