import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesk20RegularIcon],svg[fluent-desk-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8h7v7.5a.5.5 0 0 0 1 0V6a2 2 0 0 0-2-2zM3 8h6v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm0-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1zm2 2.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentDesk20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
