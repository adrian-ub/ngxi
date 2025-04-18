import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSync16RegularIcon],svg[fluent-arrow-sync-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.146.646a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 1 1-.708-.708l.643-.642a5 5 0 0 0-2.937 8.88a.5.5 0 1 1-.63.777A6 6 0 0 1 7.797 2.003l-.65-.65a.5.5 0 0 1 0-.707m3.929 2.766a.5.5 0 0 1 .703-.073a6 6 0 0 1-3.575 10.658l.65.65a.5.5 0 0 1-.707.707l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708.708l-.643.642a5 5 0 0 0 2.937-8.88a.5.5 0 0 1-.073-.704"></svg:path>`,
})
export class FluentArrowSync16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
