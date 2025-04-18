import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsLevelEndFlagIcon],svg[game-icons-level-end-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 25c-8.4 0-15 6.61-15 15s6.6 15 15 15s15-6.61 15-15s-6.6-15-15-15m7 50.53L373.1 96l81.9 20.5zM439 131v292h18V135.5zm-158 54v46h46v-46zm-64 64v46h46v-46zm64 0v46h46v-46zm-128 64v46h46v-46zm64 0v46h46v-46zm64 0v46h46v-46zM89 377v46h46v-46zm64 0v46h46v-46zm64 0v46h46v-46zm64 0v46h46v-46zM25 441v46h46v-46zm64 0v46h46v-46zm64 0v46h46v-46zm64 0v46h46v-46zm64 0v46h46v-46zm144 0v46h46v-46z"></svg:path>`,
})
export class GameIconsLevelEndFlagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
