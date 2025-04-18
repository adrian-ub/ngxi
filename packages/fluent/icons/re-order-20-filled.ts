import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReOrder20FilledIcon],svg[fluent-re-order-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 7.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentReOrder20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
