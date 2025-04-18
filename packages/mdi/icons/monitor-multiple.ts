import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorMultipleIcon],svg[mdi-monitor-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17V7H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6v2h2v2h-8v-2h2v-2H6c-1.11 0-2-.89-2-2V7a2 2 0 0 1 2-2zM2 3v12H0V3a2 2 0 0 1 2-2h18v2z"></svg:path>`,
})
export class MdiMonitorMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
