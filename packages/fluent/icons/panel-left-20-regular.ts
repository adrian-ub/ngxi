import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPanelLeft20RegularIcon],svg[fluent-panel-left-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm6.5-2v11H15a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-1 0H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2.5z"></svg:path>`,
})
export class FluentPanelLeft20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
