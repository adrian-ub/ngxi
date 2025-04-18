import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWifi420RegularIcon],svg[fluent-wifi-4-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.963 13.787a1.298 1.298 0 1 1-1.836 1.836a1.298 1.298 0 0 1 1.836-1.836"></svg:path>`,
})
export class FluentWifi420RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
