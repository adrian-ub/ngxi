import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBlock16RegularIcon],svg[fluent-block-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2zm0 1a5 5 0 1 0 0 10A5 5 0 0 0 8 3zM5.5 7.5h5.002a.5.5 0 0 1 .09.992l-.09.008H5.5a.5.5 0 0 1-.09-.992L5.5 7.5h5.002H5.5z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentBlock16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
