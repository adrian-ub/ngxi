import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBuildingRetail20FilledIcon],svg[fluent-building-retail-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10V8h8v2zm6 4v-1h2v1zm6-9.5a1.5 1.5 0 0 1-1 1.415V16.5a.5.5 0 0 1-.5.5H10v-4.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V17H3.5a.5.5 0 0 1-.5-.5V5.915A1.5 1.5 0 0 1 3.5 3h13A1.5 1.5 0 0 1 18 4.5m-15 0a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5M5.5 7a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6 5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM6 17h3v-4H6z"></svg:path>`,
})
export class FluentBuildingRetail20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
