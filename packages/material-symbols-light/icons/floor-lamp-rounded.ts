import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFloorLampRoundedIcon],svg[material-symbols-light-floor-lamp-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.019 19q-.213 0-.356-.144t-.144-.356V11H7.116q-.413 0-.66-.333t-.118-.717l1.508-4.82q.162-.504.586-.817T9.38 4h5.277q.525 0 .949.313t.585.818L17.7 9.95q.13.385-.117.717t-.66.333h-4.404v7.5q0 .213-.144.356T12.02 19m-3 2q-.212 0-.356-.144t-.144-.357t.144-.356T9.02 20h6q.213 0 .357.144t.143.357t-.143.356t-.357.143z"></svg:path>`,
})
export class MaterialSymbolsLightFloorLampRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
