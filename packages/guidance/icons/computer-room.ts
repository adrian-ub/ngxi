import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceComputerRoomIcon],svg[guidance-computer-room-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M13 16.5a11 11 0 0 0 4.041 3.93l1.459.82v.25h-13v-.25l1.459-.82A11 11 0 0 0 11 16.5m-9.5-3h21m0-11h-21v14h21z"></svg:path>`,
})
export class GuidanceComputerRoomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
