import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsUpgradeIcon],svg[game-icons-upgrade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256 29.816l-231 154v106.368l231-154l231 154V183.816zm0 128.043L105 259.783v90.283l151-101.925l151 101.925v-90.283zm0 112l-87 58.725v67.6l87-58l87 58v-67.6zm0 89.957l-87 58v64.368l87-58l87 58v-64.368z"></svg:path>`,
})
export class GameIconsUpgradeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
