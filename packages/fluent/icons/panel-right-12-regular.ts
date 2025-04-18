import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPanelRight12RegularIcon],svg[fluent-panel-right-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2H3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M2 8V4a1 1 0 0 1 1-1h4v6H3a1 1 0 0 1-1-1m8 0a1 1 0 0 1-1 1H8V3h1a1 1 0 0 1 1 1z"></svg:path>`,
})
export class FluentPanelRight12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
