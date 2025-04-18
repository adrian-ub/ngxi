import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWifi324FilledIcon],svg[fluent-wifi-3-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.939 16.446a1.501 1.501 0 1 1 2.122 2.123a1.501 1.501 0 0 1-2.123-2.123m-2.604-2.742a5.233 5.233 0 0 1 7.4 0c.46.461.838 1.025 1.101 1.625a1 1 0 0 1-1.832.803a3.4 3.4 0 0 0-.683-1.013a3.233 3.233 0 0 0-4.572 0a3.3 3.3 0 0 0-.672 1a1 1 0 1 1-1.832-.802a5.3 5.3 0 0 1 1.09-1.613"></svg:path>`,
})
export class FluentWifi324FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
