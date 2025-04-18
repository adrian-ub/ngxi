import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPen24FilledIcon],svg[fluent-pen-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.891 3.047a3.578 3.578 0 1 1 5.061 5.06L20.061 9a3.25 3.25 0 0 1-.005 4.592l-1.783 1.783a.75.75 0 1 1-1.061-1.06l1.783-1.784A1.75 1.75 0 0 0 19 10.06l-9.998 10a3.1 3.1 0 0 1-1.477.825L2.924 21.98a.75.75 0 0 1-.904-.903l1.096-4.602c.133-.559.419-1.07.825-1.476z"></svg:path>`,
})
export class FluentPen24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
