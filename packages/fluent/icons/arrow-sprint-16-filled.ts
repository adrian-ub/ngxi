import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSprint16FilledIcon],svg[fluent-arrow-sprint-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5.5a1.997 1.997 0 0 0-2 2a2 2 0 0 0 2 2h4.44l-.22-.22a.75.75 0 0 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H8a3.5 3.5 0 0 1-3.046-5.225A3.5 3.5 0 0 1 11.5 7.5v.025c-.27.276-.431.62-.482.975H9.732A2 2 0 0 0 8 5.5m-5.25 4h1.218c.29.583.702 1.094 1.203 1.5H2.75a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class FluentArrowSprint16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
