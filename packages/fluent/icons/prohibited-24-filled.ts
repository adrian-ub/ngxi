import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentProhibited24FilledIcon],svg[fluent-prohibited-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.906 5.68A8.001 8.001 0 0 0 5.68 16.906zm1.414 1.414L7.094 18.32A8.002 8.002 0 0 0 18.32 7.094M4.93 4.929c3.905-3.905 10.237-3.905 14.142 0s3.905 10.237 0 14.142s-10.237 3.905-14.142 0s-3.905-10.237 0-14.142"></svg:path>`,
})
export class FluentProhibited24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
