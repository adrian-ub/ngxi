import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPreviewLink16FilledIcon],svg[fluent-preview-link-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v1h8V5zm6 4v2.005h2V9zM1 4.75A2.75 2.75 0 0 1 3.75 2h8.5A2.75 2.75 0 0 1 15 4.75v6.5A2.75 2.75 0 0 1 12.25 14h-8.5A2.75 2.75 0 0 1 1 11.25zm2-.25v2a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5m6 4v3.005a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V8.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5m-5.5 0a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM3 11a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5"></svg:path>`,
})
export class FluentPreviewLink16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
