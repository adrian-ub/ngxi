import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsFlatPlatformIcon],svg[game-icons-flat-platform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256.5 87.9L39.7 213.5l216.9 125.7l216.6-125.7zM31 227.4v71l218 125.7v-71zm450 .2L265 353.1V424l216-125.5z"></svg:path>`,
})
export class GameIconsFlatPlatformIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
