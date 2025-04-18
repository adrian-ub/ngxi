import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFadersHorizontalFillIcon],svg[ph-faders-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 80a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16h-24a8 8 0 0 1-8-8M40 88h96v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v16H40a8 8 0 0 0 0 16m176 80h-88a8 8 0 0 0 0 16h88a8 8 0 0 0 0-16M96 144H80a8 8 0 0 0-8 8v16H40a8 8 0 0 0 0 16h32v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhFadersHorizontalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
