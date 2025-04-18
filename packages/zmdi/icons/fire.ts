import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFireIcon],svg[zmdi-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M203 6q64 52 101 126t37 159q0 70-50 120t-120.5 50T50 411T0 291q0-108 69-190l-1 8q0 33 22.5 56t55.5 23q32 0 52-23t20-56q0-21-3.5-46.5T207 22zm-39 391q43 0 73-30t30-72q0-45-13-86q-30 41-98 55q-29 6-44.5 23.5T96 330q0 28 20 47.5t48 19.5"></svg:path>`,
})
export class ZmdiFireIcon {
  readonly viewBox = input("0 0 344 464")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
