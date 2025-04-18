import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsBlackBridgeIcon],svg[game-icons-black-bridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 20a104 104 0 0 0-104 104a104 104 0 0 0 104 104a104 104 0 0 0 104-104A104 104 0 0 0 256 20M16 256v240h48c64-160 320-160 384 0h48V256h-48v64h-60v-64h-48v64h-60v-64h-48v64h-60v-64h-48v64H64v-64z"></svg:path>`,
})
export class GameIconsBlackBridgeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
