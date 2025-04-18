import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPergolaOutlineIcon],svg[material-symbols-light-pergola-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V3.5q0-.213.144-.356T4.501 3t.356.144T5 3.5V5h14V3.5q0-.213.144-.356T19.501 3t.356.144T20 3.5V20h-1V9.77H5V20zM5 8.77h14V6H5zM11.5 20v-2.827H8.673v-1h6.635v1H12.5V20zM5 8.77V6z"></svg:path>`,
})
export class MaterialSymbolsLightPergolaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
