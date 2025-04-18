import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBlock16FilledIcon],svg[fluent-block-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2zm2.502 5.5H5.5a.5.5 0 0 0 0 1h5.002a.5.5 0 1 0 0-1z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentBlock16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
