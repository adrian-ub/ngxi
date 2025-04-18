import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsTurretIcon],svg[game-icons-turret-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M130.72 61C106 61.11 106 62.875 106 91H76l-15 30v60l15 30h30c0 30 0 30 30 30h120c30 0 30 0 30-30h15l15-30h180v-60H316l-15-30h-15c0-30 0-30-30-30H136c-1.875 0-3.633-.007-5.28 0M166 271a15 15 0 0 0-15 15v45a15 15 0 0 0 15 15h60a15 15 0 0 0 15-15v-45a15 15 0 0 0-15-15zm-15 105c-30 0-45 30-45 30c-15 0-30 0-30 15l-60 15v15h360v-15l-60-15c0-15-15-15-30-15c0 0-15-30-45-30z"></svg:path>`,
})
export class GameIconsTurretIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
