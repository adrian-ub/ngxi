import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBuildingApartmentThinIcon],svg[ph-building-apartment-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 212h-12V72a4 4 0 0 0-4-4h-44V40a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v60H32a4 4 0 0 0-4 4v108H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M36 108h44a4 4 0 0 0 4-4V44h88v28a4 4 0 0 0 4 4h44v136h-72v-44a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4v44H36Zm104 104h-24v-40h24ZM116 72a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m0 32a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m56 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m-88 32a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4m0 32a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4m32-32a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m56 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m0 32a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhBuildingApartmentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
