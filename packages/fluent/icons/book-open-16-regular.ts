import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookOpen16RegularIcon],svg[fluent-book-open-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 2A1.5 1.5 0 0 0 1 3.5v9A1.5 1.5 0 0 0 2.5 14H6c.818 0 1.544-.393 2-1c.456.607 1.182 1 2 1h3.5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 13.5 2H10c-.818 0-1.544.393-2 1a2.5 2.5 0 0 0-2-1zm5 2.5v7A1.5 1.5 0 0 1 6 13H2.5a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5H6a1.5 1.5 0 0 1 1.5 1.5m1 7v-7A1.5 1.5 0 0 1 10 3h3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5H10a1.5 1.5 0 0 1-1.5-1.5"></svg:path>`,
})
export class FluentBookOpen16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
