import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSmartwatch20RegularIcon],svg[fluent-smartwatch-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5.268V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.268A2 2 0 0 1 15 7v1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v2a2 2 0 0 1-1 1.732V16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1.268A2 2 0 0 1 5 13V7a2 2 0 0 1 1-1.732M8 3a1 1 0 0 0-1 1v1h6V4a1 1 0 0 0-1-1zm6 10V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v6a1 1 0 0 0 .999 1H13a1 1 0 0 0 1-1m-7 3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H7z"></svg:path>`,
})
export class FluentSmartwatch20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
