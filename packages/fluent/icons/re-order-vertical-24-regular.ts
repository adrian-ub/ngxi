import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReOrderVertical24RegularIcon],svg[fluent-re-order-vertical-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.25 21.25V2.75a.75.75 0 0 1 1.493-.102l.007.102v18.5a.75.75 0 0 1-1.493.102zm-4 0V2.75a.75.75 0 0 1 1.493-.102l.007.102v18.5a.75.75 0 0 1-1.493.102z"></svg:path>`,
})
export class FluentReOrderVertical24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
