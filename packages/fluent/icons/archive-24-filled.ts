import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArchive24FilledIcon],svg[fluent-archive-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5V6a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 6zM4 9h16v8.25A3.75 3.75 0 0 1 16.25 21h-8.5A3.75 3.75 0 0 1 4 17.25zm6.25 2a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentArchive24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
