import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextIndentIncreaseRtl20RegularIcon],svg[fluent-text-indent-increase-rtl-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m-3 5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5M7.5 14a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm10.367-6.264a.5.5 0 0 0-.707 0l-1.414 1.415a.5.5 0 0 0 0 .707l1.414 1.414a.5.5 0 1 0 .707-.707l-1.06-1.06l1.06-1.062a.5.5 0 0 0 0-.707"></svg:path>`,
})
export class FluentTextIndentIncreaseRtl20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
