import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCheckmarkCircleSquare24FilledIcon],svg[fluent-checkmark-circle-square-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 16a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m3.78-9.22l-4 4a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l1.47 1.47l3.47-3.47a.75.75 0 1 1 1.06 1.06m8 6.94a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l3.47-3.47a.75.75 0 0 1 1.06 0M9.75 20v-3.091a8.4 8.4 0 0 0 1.5-.364V20c0 .966.784 1.75 1.75 1.75h7A1.75 1.75 0 0 0 21.75 20v-7A1.75 1.75 0 0 0 20 11.25h-3.455q.249-.724.364-1.5H20A3.25 3.25 0 0 1 23.25 13v7A3.25 3.25 0 0 1 20 23.25h-7A3.25 3.25 0 0 1 9.75 20"></svg:path>`,
})
export class FluentCheckmarkCircleSquare24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
