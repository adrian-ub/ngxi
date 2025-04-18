import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesk16FilledIcon],svg[fluent-desk-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 3A1.75 1.75 0 0 0 1 4.75V6h13v6.5a.5.5 0 0 0 1 0V4.75A1.75 1.75 0 0 0 13.25 3zM8 7H1v4.25c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 0 0 8 11.25zM3 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 3 9"></svg:path>`,
})
export class FluentDesk16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
