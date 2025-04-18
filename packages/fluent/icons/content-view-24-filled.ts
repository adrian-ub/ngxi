import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentContentView24FilledIcon],svg[fluent-content-view-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM6 8.25c0-.966.784-1.75 1.75-1.75h8.5c.966 0 1.75.784 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 6 9.75zM7.75 8a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25zm-1 5h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5M6 16.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75M15.25 13h1c.966 0 1.75.784 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-1c0-.966.784-1.75 1.75-1.75M15 14.75a.25.25 0 0 1 .25-.25h1a.25.25 0 0 1 .25.25v1a.25.25 0 0 1-.25.25h-1a.25.25 0 0 1-.25-.25z"></svg:path>`,
})
export class FluentContentView24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
