import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircleLine24FilledIcon],svg[fluent-circle-line-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.972 12.75H2.027C2.411 17.922 6.73 22 12 22s9.588-4.078 9.972-9.25m0-1.5H2.027C2.411 6.077 6.73 2 12 2s9.588 4.077 9.972 9.25"></svg:path>`,
})
export class FluentCircleLine24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
