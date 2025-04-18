import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWifi224FilledIcon],svg[fluent-wifi-2-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.96 16.44a1.501 1.501 0 1 1 2.122 2.122a1.501 1.501 0 0 1-2.123-2.122m-2.604-2.742a5.23 5.23 0 0 1 7.4 0c.46.461.838 1.025 1.101 1.625a1 1 0 1 1-1.832.803a3.4 3.4 0 0 0-.683-1.013a3.233 3.233 0 0 0-4.572 0a3.3 3.3 0 0 0-.672 1a1 1 0 1 1-1.832-.802a5.3 5.3 0 0 1 1.09-1.613M6.31 10.707a8.13 8.13 0 0 1 11.495 0a8.4 8.4 0 0 1 1.504 2.085a1 1 0 1 1-1.781.91a6.4 6.4 0 0 0-1.137-1.581a6.128 6.128 0 0 0-9.8 1.562a1 1 0 1 1-1.784-.902a8.1 8.1 0 0 1 1.503-2.074"></svg:path>`,
})
export class FluentWifi224FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
