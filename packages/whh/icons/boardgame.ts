import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBoardgameIcon],svg[whh-boardgame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 960q0 27-19 45.5t-45 18.5H64q-26 0-45-18.5T0 960q0-53 20-101t48-85.5l56-75l48-85.5l20-101q0-18-4-37q-57-34-90.5-92.5T64 256q0-106 75-181T320 0t181 75t75 181q0 68-33.5 126.5T452 475q-4 18-4 37q0 53 20 101t48 85.5l56 75l48 85.5z"></svg:path>`,
})
export class WhhBoardgameIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
