import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextMore24RegularIcon],svg[fluent-text-more-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 2a.75.75 0 0 1 .69.457l6.972 16.431a2.5 2.5 0 0 0-2.006-.886L13.92 14.5H5.58l-2.14 5.043a.75.75 0 0 1-1.38-.586l7-16.5A.75.75 0 0 1 9.75 2m3.534 11L9.75 4.67L6.216 13zM12 20.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m3.5 1.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m5 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class FluentTextMore24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
