import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPanelLeftContract28FilledIcon],svg[fluent-panel-left-contract-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.28 11.53a.75.75 0 1 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69zM22.25 4A3.75 3.75 0 0 1 26 7.75v12.5A3.75 3.75 0 0 1 22.25 24H5.755a3.75 3.75 0 0 1-3.75-3.75V7.75A3.75 3.75 0 0 1 5.754 4zm2.25 3.75a2.25 2.25 0 0 0-2.25-2.25H11.006v17H22.25a2.25 2.25 0 0 0 2.25-2.25z"></svg:path>`,
})
export class FluentPanelLeftContract28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
