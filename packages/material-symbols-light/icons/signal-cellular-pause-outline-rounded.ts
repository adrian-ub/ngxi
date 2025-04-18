import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSignalCellularPauseOutlineRoundedIcon],svg[material-symbols-light-signal-cellular-pause-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.373 19.627L19.627 4.373q.379-.379.876-.171t.497.742v8.287q0 .212-.144.356t-.357.144t-.356-.144t-.143-.356V5.42L5.421 20h8.194q.213 0 .357.144t.144.357t-.144.356t-.357.143h-8.67q-.535 0-.743-.497t.171-.876M16.999 21q-.212 0-.356-.144T16.5 20.5v-3.884q0-.213.144-.357t.357-.143t.356.143t.143.357V20.5q0 .213-.144.356t-.357.144m3 0q-.212 0-.356-.144T19.5 20.5v-3.884q0-.213.144-.357t.357-.143t.356.143t.143.357V20.5q0 .213-.144.356t-.357.144m-7.285-8.292"></svg:path>`,
})
export class MaterialSymbolsLightSignalCellularPauseOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
