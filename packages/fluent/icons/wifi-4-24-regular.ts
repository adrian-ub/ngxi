import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWifi424RegularIcon],svg[fluent-wifi-4-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.94 18.561a1.5 1.5 0 1 0 2.121-2.122a1.5 1.5 0 0 0-2.122 2.122"></svg:path>`,
})
export class FluentWifi424RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
