import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGesture20RegularIcon],svg[fluent-gesture-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.011 4.394A.5.5 0 0 1 5.5 4h9a.5.5 0 0 1 0 1H7.808l8.899 4.045a.5.5 0 0 1 .03.895l-11 5.923a.5.5 0 1 1-.474-.88l10.112-5.445L5.293 4.955a.5.5 0 0 1-.282-.56M17 4.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M3.5 17a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class FluentGesture20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
