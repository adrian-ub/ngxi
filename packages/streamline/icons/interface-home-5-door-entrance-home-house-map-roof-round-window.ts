import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceHome5DoorEntranceHomeHouseMapRoofRoundWindowIcon],svg[streamline-interface-home-5-door-entrance-home-house-map-roof-round-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 8.5L7 2l6.5 6.5"></svg:path><svg:path d="M2.5 6.5v7h9v-7m-4.5 7v-3"></svg:path><svg:circle cx="7" cy="6.75" r="1.25"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceHome5DoorEntranceHomeHouseMapRoofRoundWindowIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
