import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRouter24RegularIcon],svg[fluent-router-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.5A7.5 7.5 0 0 0 4.5 11v.25a.75.75 0 0 1-1.5 0V11a9 9 0 0 1 18 0v.25a.75.75 0 0 1-1.5 0V11A7.5 7.5 0 0 0 12 3.5m0 3A4.5 4.5 0 0 0 7.5 11v.25a.75.75 0 0 1-1.5 0V11a6 6 0 1 1 12 0v.25a.75.75 0 0 1-1.5 0V11A4.5 4.5 0 0 0 12 6.5M12 8a3 3 0 0 0-.75 5.906V16H6a3 3 0 1 0 0 6h12a3 3 0 1 0 0-6h-5.25v-2.094A3.001 3.001 0 0 0 12 8m-1.5 3a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M6 17.5h12a1.5 1.5 0 0 1 0 3H6a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class FluentRouter24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
