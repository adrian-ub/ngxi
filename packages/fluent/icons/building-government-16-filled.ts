import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBuildingGovernment16FilledIcon],svg[fluent-building-government-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3v1a4 4 0 0 1 4 4v1h1.5a1.5 1.5 0 0 1 1.5 1.5v4a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2.25a.25.25 0 0 0-.25-.25h-1.5a.25.25 0 0 0-.25.25v2.25a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-4A1.5 1.5 0 0 1 2.5 9H4V8a4 4 0 0 1 3.015-3.878A.5.5 0 0 1 7 4V1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5zm-3.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5m7.5.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zM9.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5M7 7.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0z"></svg:path>`,
})
export class FluentBuildingGovernment16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
