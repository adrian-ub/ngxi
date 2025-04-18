import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBuildingMultiple20FilledIcon],svg[fluent-building-multiple-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v13a1 1 0 0 0 1 1h7.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 .5.5H17a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2h-4V4a2 2 0 0 0-2-2zm7 3h-1a2 2 0 0 0-2 2v10H3V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zM5.25 9.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M6 5.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-.75 9.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M6 11.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m5.25-2.25a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m.75 2.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m2.75-2.25a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m.75 2.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class FluentBuildingMultiple20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
