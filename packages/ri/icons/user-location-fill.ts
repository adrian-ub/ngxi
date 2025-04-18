import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riUserLocationFillIcon],svg[ri-user-location-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14v8H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m8.828 7.828L18 23.657l-2.828-2.829a4 4 0 1 1 5.656 0M18 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class RiUserLocationFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
