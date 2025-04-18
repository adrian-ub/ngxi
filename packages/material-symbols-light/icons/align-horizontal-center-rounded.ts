import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignHorizontalCenterRoundedIcon],svg[material-symbols-light-align-horizontal-center-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 20.5v-4.192H8.02q-.414 0-.717-.303T7 15.289t.303-.717t.716-.303H11.5V9.731H5.02q-.414 0-.717-.303T4 8.711t.303-.716t.716-.303H11.5V3.5q0-.213.144-.356T12.001 3t.356.144t.143.356v4.192h6.48q.414 0 .717.303t.303.716t-.303.717t-.716.303H12.5v4.538h3.48q.414 0 .717.303t.303.716t-.303.717t-.716.303H12.5V20.5q0 .213-.144.356t-.357.144t-.356-.144t-.143-.356"></svg:path>`,
})
export class MaterialSymbolsLightAlignHorizontalCenterRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
