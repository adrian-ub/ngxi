import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentZoomOut32LightIcon],svg[fluent-zoom-out-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 12.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zM13 23C7.477 23 3 18.523 3 13S7.477 3 13 3s10 4.477 10 10a9.96 9.96 0 0 1-2.584 6.709l8.438 8.437a.5.5 0 0 1-.708.708l-8.437-8.438A9.96 9.96 0 0 1 13 23m0-1a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path>`,
})
export class FluentZoomOut32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
