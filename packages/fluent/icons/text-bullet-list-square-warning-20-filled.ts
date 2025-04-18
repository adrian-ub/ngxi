import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextBulletListSquareWarning20FilledIcon],svg[fluent-text-bullet-list-square-warning-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.75A2.75 2.75 0 0 1 5.75 3h8.5A2.75 2.75 0 0 1 17 5.75v5.77l-.707-1.414c-.72-1.439-2.74-1.474-3.523-.106H9.5a.5.5 0 0 0 0 1h2.767l-.999 2H9.5a.5.5 0 0 0 0 1h1.269L9.27 17H5.75A2.75 2.75 0 0 1 3 14.25zM6.75 8a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m.75 2.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0M6.75 14a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M9 7.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5m4.603 3.054a1 1 0 0 1 1.79 0l3.5 6.998A1 1 0 0 1 17.998 19h-6.996a1 1 0 0 1-.895-1.448zm1.395 1.941a.5.5 0 1 0-1 0v3.002a.5.5 0 1 0 1 0zm-.5 5.504a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class FluentTextBulletListSquareWarning20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
