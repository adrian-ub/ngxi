import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlashForward16FilledIcon],svg[fluent-slash-forward-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.267 2.05a.75.75 0 0 1 .434.967l-4 10.5a.75.75 0 0 1-1.402-.534l4-10.5a.75.75 0 0 1 .968-.434"></svg:path>`,
})
export class FluentSlashForward16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
