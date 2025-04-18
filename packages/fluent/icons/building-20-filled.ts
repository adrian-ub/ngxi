import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBuilding20FilledIcon],svg[fluent-building-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3.5A1.5 1.5 0 0 1 5.5 2h6A1.5 1.5 0 0 1 13 3.5V8h1.5A1.5 1.5 0 0 1 16 9.5v8a.5.5 0 0 1-.5.5H13v-3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V18H4.5a.5.5 0 0 1-.5-.5zm2.75 3a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m.75 2.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0m-.75 3.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m3.75-6.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0M9.75 9.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m.75 2.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0m2.25.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M12 15v3h-1.5v-3zm-2.5 0H8v3h1.5z"></svg:path>`,
})
export class FluentBuilding20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
