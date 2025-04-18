import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightMonitorMultipleIcon],svg[mdi-light-monitor-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5h13a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-4.5l.5 3h1v1H9v-1h1l.5-3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m5.5 13l-.5 3h3l-.5-3zM6 6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM1 8a5 5 0 0 1 5-5h12v1H6a4 4 0 0 0-4 4v6H1z"></svg:path>`,
})
export class MdiLightMonitorMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
