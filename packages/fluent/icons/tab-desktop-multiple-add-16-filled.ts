import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabDesktopMultipleAdd16FilledIcon],svg[fluent-tab-desktop-multiple-add-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 1H6v1.5A1.5 1.5 0 0 0 7.5 4H13v4.5a2.5 2.5 0 0 1-2.018 2.454Q11 10.729 11 10.5a5.5 5.5 0 0 0-8-4.9V3.5A2.5 2.5 0 0 1 5.5 1m5.293 11a5.5 5.5 0 0 1-.393 1h.599a4 4 0 0 0 4-4V5.5c0-.816-.392-1.542-.998-1.998V8.5l-.002.114V9a3 3 0 0 1-3 3zM10.5 1a2.5 2.5 0 0 1 2.45 2H7.5a.5.5 0 0 1-.5-.5V1zm-.5 9.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V10H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V11h1.5a.5.5 0 0 0 0-1H6z"></svg:path>`,
})
export class FluentTabDesktopMultipleAdd16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
