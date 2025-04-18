import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightMonitorIcon],svg[mdi-light-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4h13a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-4.5l.5 3h1v1H8v-1h1l.5-3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m5.5 13l-.5 3h3l-.5-3zM5 5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"></svg:path>`,
})
export class MdiLightMonitorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
