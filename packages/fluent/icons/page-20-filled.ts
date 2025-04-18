import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPage20FilledIcon],svg[fluent-page-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5V9h-4.5A1.5 1.5 0 0 1 11 7.5V3H5.5z" fill="currentColor"></svg:path><svg:path d="M12 3.144V7.5a.5.5 0 0 0 .5.5h4.356a2.5 2.5 0 0 0-.588-.932l-3.336-3.336A2.5 2.5 0 0 0 12 3.144z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentPage20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
