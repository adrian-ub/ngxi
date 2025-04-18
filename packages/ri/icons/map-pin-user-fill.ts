import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMapPinUserFillIcon],svg[ri-map-pin-user-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.084 15.812a7 7 0 1 0-10.168 0A6 6 0 0 1 12 13a6 6 0 0 1 5.084 2.812M12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 12a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class RiMapPinUserFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
