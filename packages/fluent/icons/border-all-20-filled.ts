import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBorderAll20FilledIcon],svg[fluent-border-all-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v3h4.75V4.5zm4.5 0v4.75h4.75v-3a1.75 1.75 0 0 0-1.75-1.75zm4.75 6.25h-4.75v4.75h3a1.75 1.75 0 0 0 1.75-1.75zM9.25 15.5v-4.75H4.5v3c0 .966.784 1.75 1.75 1.75zM3 6.25A3.25 3.25 0 0 1 6.25 3h7.5A3.25 3.25 0 0 1 17 6.25v7.5A3.25 3.25 0 0 1 13.75 17h-7.5A3.25 3.25 0 0 1 3 13.75z"></svg:path>`,
})
export class FluentBorderAll20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
