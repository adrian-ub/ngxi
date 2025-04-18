import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentIosChevronRight20RegularIcon],svg[fluent-ios-chevron-right-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.646 5.854a.5.5 0 0 1 .708-.708l4.5 4.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708L16.793 10z"></svg:path>`,
})
export class FluentIosChevronRight20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
