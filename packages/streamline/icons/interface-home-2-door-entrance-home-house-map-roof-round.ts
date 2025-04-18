import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceHome2DoorEntranceHomeHouseMapRoofRoundIcon],svg[streamline-interface-home-2-door-entrance-home-house-map-roof-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 9L7 2.5L13.5 9"></svg:path><svg:path d="M2.5 7v6.5h9V7M7 13.5v-4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceHome2DoorEntranceHomeHouseMapRoofRoundIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
