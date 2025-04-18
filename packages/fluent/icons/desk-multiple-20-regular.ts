import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDeskMultiple20RegularIcon],svg[fluent-desk-multiple-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.998 3a2 2 0 0 0-1.732 1h9.732a3 3 0 0 1 3 3v6.5a.5.5 0 1 0 1 0V7a4 4 0 0 0-4-4zM4 5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V9h6v6.5a.5.5 0 0 0 1 0V7a2 2 0 0 0-2-2zM3 9h5v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm0-1V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1zm1.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentDeskMultiple20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
