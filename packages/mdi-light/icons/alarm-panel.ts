import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightAlarmPanelIcon],svg[mdi-light-alarm-panel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 11v2H5v-2zm5 0h-3v2h3zm5 0h-3v2h3zm-1-4H6v2h11zm1-1v4H5V6zm1-1H4c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h15c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1m0-1c1.1 0 2 .9 2 2v13c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM8 14H5v2h3zm5 0h-3v2h3zm5 0h-3v2h3zM8 17H5v2h3zm5 0h-3v2h3zm5 0h-3v2h3z"></svg:path>`,
})
export class MdiLightAlarmPanelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
