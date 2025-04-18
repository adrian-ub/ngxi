import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorSmallIcon],svg[mdi-monitor-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H5c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h5v2H8v2h8v-2h-2v-2h5c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m0 14H5V4h14z"></svg:path>`,
})
export class MdiMonitorSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
