import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextIndentDecreaseRtl20RegularIcon],svg[fluent-text-indent-decrease-rtl-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 4a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm-3 5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zM7 14.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m9.453-6.764a.5.5 0 1 0-.707.708l1.06 1.06l-1.06 1.06a.5.5 0 1 0 .707.708l1.414-1.414a.5.5 0 0 0 0-.707z"></svg:path>`,
})
export class FluentTextIndentDecreaseRtl20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
