import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesk20FilledIcon],svg[fluent-desk-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4a2 2 0 0 0-2 2v1h15v8.5a.5.5 0 0 0 1 0V6a2 2 0 0 0-2-2zm6 4H2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zm-5.5 2.5A.5.5 0 0 1 5 10h2a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentDesk20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
