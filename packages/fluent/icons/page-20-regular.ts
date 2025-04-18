import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPage20RegularIcon],svg[fluent-page-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5V8.828a2.5 2.5 0 0 0-.732-1.767l-3.329-3.329A2.5 2.5 0 0 0 11.172 3H5.5zM4 5.5A1.5 1.5 0 0 1 5.5 4H11v3.5A1.5 1.5 0 0 0 12.5 9H16v5.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5v-9zM15.75 8H12.5a.5.5 0 0 1-.5-.5V4.25c.083.054.16.118.232.19l3.329 3.328c.071.071.134.149.19.232z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentPage20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
