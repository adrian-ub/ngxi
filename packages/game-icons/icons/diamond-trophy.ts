import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsDiamondTrophyIcon],svg[game-icons-diamond-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m158.6 41l34.5 69.1L239.2 41zm114.2 0l46.1 69.1L353.4 41zM256 48.22L208.8 119h94.4zm-113.9.14L83.22 119h94.18zm227.8 0L334.6 119h94.2zM80.82 137L196.8 311H249l-63.4-174zm124.08 0L256 277.7L307.1 137zm121.5 0L263 311h52.2l116-174zM201 329v46h110v-46zm-67.8 64l-53.69 94H432.5l-53.7-94H183zm26.8 46h192v18H160z"></svg:path>`,
})
export class GameIconsDiamondTrophyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
