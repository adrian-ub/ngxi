import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlashForward24FilledIcon],svg[fluent-slash-forward-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.317 2.051a1 1 0 0 1 .632 1.265l-6 18a1 1 0 1 1-1.897-.632l6-18a1 1 0 0 1 1.265-.633"></svg:path>`,
})
export class FluentSlashForward24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
