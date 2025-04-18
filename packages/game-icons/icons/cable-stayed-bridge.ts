import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsCableStayedBridgeIcon],svg[game-icons-cable-stayed-bridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M113 41v446h30V41zM95 60.35L18 114.9v22l77-54.5zm66 0V82.4L483.8 311H494v-14.7zM95 98.59L18 170.8v24.7l77-72.2zm66 0v24.71L361.2 311h26.4zm0 49.81v34.4L239.9 311h21.2zm-66 .1L18 273.6v34.3l77-125.1zM18 329v30h77v-30zm143 0v30h333v-30z"></svg:path>`,
})
export class GameIconsCableStayedBridgeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
