import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsPrivateIcon],svg[game-icons-private-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M255.977 147.306C285.345 194.92 349.612 272.93 406 311.866v52.592c-52.596-39.175-105.228-92.47-140.56-145.47l-9.44-14.16l-9.44 14.16c-35.446 53.17-87.448 106.787-140.56 145.706v-52.89c55.382-38.943 120.38-116.82 149.977-164.498"></svg:path>`,
})
export class GameIconsPrivateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
