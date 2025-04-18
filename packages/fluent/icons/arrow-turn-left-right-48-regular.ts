import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnLeftRight48RegularIcon],svg[fluent-arrow-turn-left-right-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.474 9.407a1.25 1.25 0 0 0-.948-2.313L7.216 19.918c-1.863.763-1.863 3.401 0 4.164l30.208 12.374l-8.713 4.167a1.25 1.25 0 1 0 1.078 2.255l11.5-5.5c.6-.287.87-.994.615-1.608l-5-12a1.25 1.25 0 1 0-2.308.961l3.952 9.483L8.728 22z"></svg:path>`,
})
export class FluentArrowTurnLeftRight48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
