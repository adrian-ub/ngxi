import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsOnigoriIcon],svg[game-icons-onigori-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 64c64 0 224 224 224 352c0 31.3-47.7 52.4-112 63.3c-.3-100-5.8-143.3-112-143.3s-111.7 43.3-112 143.3c-64.3-10.9-112-32-112-63.3C32 288 192 64 256 64"></svg:path>`,
})
export class GameIconsOnigoriIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
