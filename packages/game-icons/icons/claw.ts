import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsClawIcon],svg[game-icons-claw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 16C106 76 46 226 46 226c0 45 60 90 90 90c90 0 180-195 135-285zm45 15c30 60 0 135 0 135c120 30 120 180 75 330c75-75 90-150 90-210c0-90-15-225-165-255"></svg:path>`,
})
export class GameIconsClawIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
