import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilMonitorIcon],svg[cil-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M472 16H40a24.03 24.03 0 0 0-24 24v336a24.03 24.03 0 0 0 24 24h200v64h-80v32h192v-32h-80v-64h200a24.03 24.03 0 0 0 24-24V40a24.03 24.03 0 0 0-24-24m-8 352H48v-96h416Zm0-128H48V48h416Z"></svg:path><svg:path fill="currentColor" d="M400 304h32v32h-32z"></svg:path>`,
})
export class CilMonitorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
