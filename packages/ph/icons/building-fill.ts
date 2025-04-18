import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBuildingFillIcon],svg[ph-building-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 224h-24V32h8a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16h8v192H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M88 56h24a8 8 0 0 1 0 16H88a8 8 0 0 1 0-16m0 40h24a8 8 0 0 1 0 16H88a8 8 0 0 1 0-16m-8 48a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16H88a8 8 0 0 1-8-8m72 80h-48v-40h48Zm16-72h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16m0-40h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16m0-40h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhBuildingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
