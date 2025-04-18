import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsElevatorIcon],svg[game-icons-elevator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M153 35v58h206V35zm60.3 13h32l-16 32zm74.7 0l16 32h-32zm-183 89v350h142V137zm160 0v350h142V137zm173 141v84h52v-84zm26 26a16 16 0 0 1 16 16a16 16 0 0 1-16 16a16 16 0 0 1-16-16a16 16 0 0 1 16-16"></svg:path>`,
})
export class GameIconsElevatorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
