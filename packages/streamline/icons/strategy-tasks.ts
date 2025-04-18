import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineStrategyTasksIcon],svg[streamline-strategy-tasks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 1.5H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"></svg:path><svg:path d="M8.5.5h-3a1 1 0 0 0-1 1V2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1M4.046 6.203a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 0 0-2.5 0m3.406 2.63l2.5 2.5m.002-2.5l-2.5 2.5"></svg:path></svg:g>`,
})
export class StreamlineStrategyTasksIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
