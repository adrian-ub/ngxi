import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryChartBarIcon],svg[memory-chart-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h2v16h16v2H2zm4 14V8h4v8zm5 0V4h4v12zm5 0v-5h4v5z"></svg:path>`,
})
export class MemoryChartBarIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
