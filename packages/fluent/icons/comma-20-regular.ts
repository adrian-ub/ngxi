import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentComma20RegularIcon],svg[fluent-comma-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.28 2.707c-.262 1.167-.693 2.133-1.236 2.881C10.071 14.348 8.84 15 7.5 15a.5.5 0 0 0 0 1c1.698 0 3.217-.839 4.294-2.325C12.866 12.197 13.5 10.086 13.5 7.5"></svg:path>`,
})
export class FluentComma20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
