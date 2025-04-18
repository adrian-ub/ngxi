import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFrame20RegularIcon],svg[fluent-frame-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2.5a.5.5 0 0 0-1 0V4H2.5a.5.5 0 0 0 0 1H4v10H2.5a.5.5 0 0 0 0 1H4v1.5a.5.5 0 0 0 1 0V16h10v1.5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H16V5h1.5a.5.5 0 0 0 0-1H16V2.5a.5.5 0 0 0-1 0V4H5zM15 5v10H5V5z"></svg:path>`,
})
export class FluentFrame20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
