import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEye32LightIcon],svg[fluent-eye-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.998 24c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6m0-11c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m13.5 5a.51.51 0 0 1-.49-.39c-.1-.43-2.55-10.61-13.01-10.61S3.088 17.18 2.988 17.61a.503.503 0 0 1-.98-.22C2.038 17.28 4.728 6 15.998 6s13.96 11.27 13.99 11.39c.06.27-.11.54-.38.6c-.04 0-.08.01-.11.01"></svg:path>`,
})
export class FluentEye32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
