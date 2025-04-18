import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAppFolder24FilledIcon],svg[fluent-app-folder-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.501 14.25a1.75 1.75 0 0 0-1.75-1.75h-2a1.75 1.75 0 0 0-1.75 1.75v2c0 .966.784 1.75 1.75 1.75h2a1.75 1.75 0 0 0 1.75-1.75zm6.498 0a1.75 1.75 0 0 0-1.75-1.75h-2a1.75 1.75 0 0 0-1.75 1.75v2c0 .966.783 1.75 1.75 1.75h2a1.75 1.75 0 0 0 1.75-1.75zM11.5 7.75A1.75 1.75 0 0 0 9.75 6h-2A1.75 1.75 0 0 0 6 7.75v2c0 .966.784 1.75 1.75 1.75h2a1.75 1.75 0 0 0 1.75-1.75zm6.497 0A1.75 1.75 0 0 0 16.247 6h-2a1.75 1.75 0 0 0-1.75 1.75v2c0 .966.784 1.75 1.75 1.75h2a1.75 1.75 0 0 0 1.75-1.75zM6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75z"></svg:path>`,
})
export class FluentAppFolder24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
