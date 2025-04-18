import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlag48RegularIcon],svg[fluent-flag-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 7.25C7.5 6.56 8.06 6 8.75 6h32.5a1.25 1.25 0 0 1 1.007 1.99L33.801 19.5l8.456 11.51A1.25 1.25 0 0 1 41.25 33H10v9.75a1.25 1.25 0 1 1-2.5 0zM10 30.5h28.78l-7.537-10.26a1.25 1.25 0 0 1 0-1.48L38.78 8.5H10z"></svg:path>`,
})
export class FluentFlag48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
