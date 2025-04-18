import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDoor28RegularIcon],svg[fluent-door-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 15a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M5 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3zm3-1.5A1.5 1.5 0 0 0 6.5 5v18A1.5 1.5 0 0 0 8 24.5h12a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 20 3.5z"></svg:path>`,
})
export class FluentDoor28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
