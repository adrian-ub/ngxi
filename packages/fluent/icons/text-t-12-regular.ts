import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextT12RegularIcon],svg[fluent-text-t-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V3H6v6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H5V3H3v1a.5.5 0 0 1-1 0z"></svg:path>`,
})
export class FluentTextT12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
