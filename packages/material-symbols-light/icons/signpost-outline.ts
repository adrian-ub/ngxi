import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSignpostOutlineIcon],svg[material-symbols-light-signpost-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 21v-4h-5L4 14.5L6.5 12h5v-2H5V5h6.5V3h1v2h5L20 7.5L17.5 10h-5v2H19v5h-6.5v4zM6 9h11.098l1.5-1.5l-1.5-1.5H6zm.902 7H18v-3H6.902l-1.5 1.5zM6 9V6zm12 7v-3z"></svg:path>`,
})
export class MaterialSymbolsLightSignpostOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
