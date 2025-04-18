import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextPositionBehind24RegularIcon],svg[fluent-text-position-behind-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4.75A.75.75 0 0 1 3.75 4h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 4.75M9.5 11a2.5 2.5 0 0 1 5 0v4.75a.75.75 0 0 0 1.5 0V11a4 4 0 0 0-8 0v4.75a.75.75 0 0 0 1.5 0zm10.75 1.5H17V11h3.25a.75.75 0 0 1 0 1.5m-16.5 0H7V11H3.75a.75.75 0 0 0 0 1.5m0 5.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zm6.75-7h3v1.5h-3z"></svg:path>`,
})
export class FluentTextPositionBehind24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
