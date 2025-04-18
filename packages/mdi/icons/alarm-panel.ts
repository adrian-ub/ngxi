import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAlarmPanelIcon],svg[mdi-alarm-panel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M8 19H5v-2h3zm0-3H5v-2h3zm0-3H5v-2h3zm5.5 6h-3v-2h3zm0-3h-3v-2h3zm0-3h-3v-2h3zm5.5 6h-3v-2h3zm0-3h-3v-2h3zm0-3h-3v-2h3zm0-4H5V5h14z"></svg:path>`,
})
export class MdiAlarmPanelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
