import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryMonitorIcon],svg[memory-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h18v1h1v12h-1v1h-7v2h2v2H7v-2h2v-2H2v-1H1V3h1zm1 2v10h16V4z"></svg:path>`,
})
export class MemoryMonitorIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
