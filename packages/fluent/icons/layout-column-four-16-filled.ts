import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutColumnFour16FilledIcon],svg[fluent-layout-column-four-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 14H11V2H8.5zm-1-12H5v12h2.5zm6.5 9.5a2.5 2.5 0 0 1-2 2.45V2.05a2.5 2.5 0 0 1 2 2.45zM4 2.05A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45z"></svg:path>`,
})
export class FluentLayoutColumnFour16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
