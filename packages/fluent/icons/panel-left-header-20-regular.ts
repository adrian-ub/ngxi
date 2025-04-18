import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPanelLeftHeader20RegularIcon],svg[fluent-panel-left-header-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm3.5 4V4H15a2 2 0 0 1 2 2v1zm0 1H17v5a2 2 0 0 1-2 2H8.5zM5 4h2.5v11H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"></svg:path>`,
})
export class FluentPanelLeftHeader20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
