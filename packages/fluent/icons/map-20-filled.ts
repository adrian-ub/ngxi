import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMap20FilledIcon],svg[fluent-map-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6.04l-4-2.8v10.72l4 2.8zm1 10.72l4.787-3.35A.5.5 0 0 0 18 13V3.5a.5.5 0 0 0-.787-.41L13 6.04zM2.213 6.59L7 3.24v10.72l-4.213 2.95A.5.5 0 0 1 2 16.5V7a.5.5 0 0 1 .213-.41"></svg:path>`,
})
export class FluentMap20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
