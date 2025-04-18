import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilTerrainIcon],svg[cil-terrain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m40.841 312l103.652-112.88l71.904 71.904l76.29 76.289l22.626-22.626l-77.069-77.07l89.494-95.887L470.836 312H496v-19.864L328.262 104.27L215.603 224.976l-72.096-72.096L16 291.741V312zM16 392h480v32H16z"></svg:path>`,
})
export class CilTerrainIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
