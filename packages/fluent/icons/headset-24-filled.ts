import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHeadset24FilledIcon],svg[fluent-headset-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 9a7 7 0 0 1 14 0v5a2 2 0 0 1-2 2h-2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2.5V9a5.5 5.5 0 1 0-11 0v1H9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7q-.26 0-.5-.063v.313a2.25 2.25 0 0 0 2.096 2.245l.154.005h1.128a2.25 2.25 0 1 1 0 1.5H8.75a3.75 3.75 0 0 1-3.745-3.55L5 16.25z"></svg:path>`,
})
export class FluentHeadset24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
