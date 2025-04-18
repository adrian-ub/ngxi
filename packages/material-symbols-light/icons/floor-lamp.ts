import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFloorLampIcon],svg[material-symbols-light-floor-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.52 19v-8H7.115q-.413 0-.66-.333t-.118-.717l1.508-4.82q.162-.504.586-.817T9.38 4h5.277q.525 0 .949.313t.585.818L17.7 9.95q.13.385-.117.717t-.66.333h-4.404v8zm-3 2v-1h7v1z"></svg:path>`,
})
export class MaterialSymbolsLightFloorLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
