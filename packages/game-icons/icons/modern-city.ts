import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsModernCityIcon],svg[game-icons-modern-city-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M217 25v30h30V25zm48 0v30h30V25zm48 0v30h30V25zm-96 48v46h30V73zm48 0v46h30V73zm48 0v46h30V73zm-96 64v46h30v-46zm48 0v46h30v-46zm48 0v46h30v-46zm174 6.508l-94 53.715V215h94zM217 201v46h30v-46zm48 0v46h30v-46zm48 0v46h30v-46zm80 32v110h94V233zM39 256v23h18v-23zm178 9v46h30v-46zm48 0v46h30v-46zm48 0v46h30v-46zM37.562 297l-7 14h146.875l-7-14zM25 329v158h23v-23h32v23h48v-23h32v23h23V329zm192 0v46h30v-46zm48 0v46h30v-46zm48 0v46h30v-46zM48 352h32v16H48zm80 0h32v16h-32zm265 9v126h31v-23h32v23h31V361zM48 384h32v16H48zm80 0h32v16h-32zm89 9v46h30v-46zm48 0v46h30v-46zm48 0v46h30v-46zM48 416h32v16H48zm80 0h32v16h-32zm89 41v30h30v-30zm48 0v30h30v-30zm48 0v30h30v-30z"></svg:path>`,
})
export class GameIconsModernCityIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
