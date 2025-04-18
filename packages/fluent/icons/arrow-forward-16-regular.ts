import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowForward16RegularIcon],svg[fluent-arrow-forward-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.646 3.646a.5.5 0 0 0 0 .708L12.293 7H7.5A5.5 5.5 0 0 0 2 12.5a.5.5 0 0 0 1 0A4.5 4.5 0 0 1 7.5 8h4.793l-2.647 2.646a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"></svg:path>`,
})
export class FluentArrowForward16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
