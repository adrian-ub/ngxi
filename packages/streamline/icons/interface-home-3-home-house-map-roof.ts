import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceHome3HomeHouseMapRoofIcon],svg[streamline-interface-home-3-home-house-map-roof-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7L7 .5L13.5 7m-11 1.5v5h9v-5"></svg:path>`,
})
export class StreamlineInterfaceHome3HomeHouseMapRoofIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
