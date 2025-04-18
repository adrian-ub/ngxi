import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsSmartphoneIcon],svg[game-icons-smartphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134.5 30.5v451h243v-451zm100.68 20h41.6a8 8 0 0 1 0 16h-41.6a8 8 0 1 1 0-16m20.32 420.51a19.26 19.26 0 1 1 19.26-19.26a19.26 19.26 0 0 1-19.26 19.26m105-44.51h-211v-343h211z"></svg:path>`,
})
export class GameIconsSmartphoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
