import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceHome4DoorEntrnaceMapIcon],svg[streamline-interface-home-4-door-entrnace-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="9" height="13" x="2.5" y=".5" rx="1"></svg:rect><svg:path d="M8 7.5h1"></svg:path></svg:g>`,
})
export class StreamlineInterfaceHome4DoorEntrnaceMapIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
