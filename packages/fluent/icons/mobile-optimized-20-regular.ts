import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMobileOptimized20RegularIcon],svg[fluent-mobile-optimized-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2.5a.5.5 0 0 0-1 0V4H2.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5zm11 0a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1H16zM7 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm0 1h6v8H7zM4.5 18a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0 0 1H4v1.5a.5.5 0 0 0 .5.5m11 0a.5.5 0 0 0 .5-.5V16h1.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5m-7-10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentMobileOptimized20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
