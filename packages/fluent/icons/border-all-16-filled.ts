import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBorderAll16FilledIcon],svg[fluent-border-all-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v2.5h3.75V3.5zm4 0v3.75h3.75v-2.5c0-.69-.56-1.25-1.25-1.25zm3.75 5.25H8.75v3.75h2.5c.69 0 1.25-.56 1.25-1.25zM7.25 12.5V8.75H3.5v2.5c0 .69.56 1.25 1.25 1.25zM2 4.75A2.75 2.75 0 0 1 4.75 2h6.5A2.75 2.75 0 0 1 14 4.75v6.5A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25z"></svg:path>`,
})
export class FluentBorderAll16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
