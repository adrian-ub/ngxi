import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronDoubleLeft20RegularIcon],svg[fluent-chevron-double-left-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.353 15.854a.5.5 0 0 1-.707.001L5.162 10.39a.55.55 0 0 1 0-.78l5.484-5.464a.5.5 0 1 1 .706.708L6.188 10l5.164 5.147a.5.5 0 0 1 .001.707m4 0a.5.5 0 0 1-.708.001L9.161 10.39a.55.55 0 0 1 0-.78l5.484-5.464a.5.5 0 1 1 .706.708L10.187 10l5.164 5.147a.5.5 0 0 1 .001.707"></svg:path>`,
})
export class FluentChevronDoubleLeft20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
