import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPanZoomIcon],svg[material-symbols-light-pan-zoom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-5h1v3.292l3.6-3.6l.708.708l-3.6 3.6H9v1zM15.4 9.308l-.708-.708l3.6-3.6H15V4h5v5h-1V5.708z"></svg:path>`,
})
export class MaterialSymbolsLightPanZoomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
