import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDiamond28RegularIcon],svg[fluent-diamond-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.098 16.651a3.75 3.75 0 0 1 0-5.303l8.25-8.25a3.75 3.75 0 0 1 5.303 0l8.25 8.25a3.75 3.75 0 0 1 0 5.303l-8.25 8.25a3.75 3.75 0 0 1-5.303 0zM4.16 12.41a2.25 2.25 0 0 0 0 3.182l8.25 8.25a2.25 2.25 0 0 0 3.182 0l8.25-8.25a2.25 2.25 0 0 0 0-3.182l-8.25-8.25a2.25 2.25 0 0 0-3.182 0z"></svg:path>`,
})
export class FluentDiamond28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
