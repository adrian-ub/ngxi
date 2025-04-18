import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRoad20FilledIcon],svg[fluent-road-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2.75a.75.75 0 0 0-1.5 0v14.5a.75.75 0 0 0 1.5 0zm11.5 0a.75.75 0 0 0-1.5 0v14.5a.75.75 0 0 0 1.5 0zm-5.75 0a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zm-1.5 8.5a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0zm0 3.5a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0z"></svg:path>`,
})
export class FluentRoad20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
