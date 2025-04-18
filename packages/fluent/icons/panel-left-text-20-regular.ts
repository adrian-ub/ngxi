import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPanelLeftText20RegularIcon],svg[fluent-panel-left-text-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.59 6.992A.5.5 0 0 0 6.5 6h-2l-.09.008A.5.5 0 0 0 4.5 7h2zm0 3A.5.5 0 0 0 6.5 9h-2l-.09.008A.5.5 0 0 0 4.5 10h2zm0 3A.5.5 0 0 0 6.5 12h-2l-.09.008A.5.5 0 0 0 4.5 13h2zM5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm10 12H9V4h6a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2M5 4h3v11H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"></svg:path>`,
})
export class FluentPanelLeftText20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
