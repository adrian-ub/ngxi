import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsPackedPlanksIcon],svg[game-icons-packed-planks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M73 25v62h78V25zm96 0v62h78V25zm96 0v62h78V25h-34.8L297 58.6L278 25zm96 0v62h78V25zM41 105v24.4L53.21 151H471v-46zm32 64v174h78V169zm96 0v174h78V169zm96 0v174h78V169zm96 0v151.9l12.5 22.1H439V169zM41 361v46h430v-46zm32 64v62h68l10-30.2V425zm96 0v62h78v-62zm96 0v62h78v-62zm96 0v62h78v-62z"></svg:path>`,
})
export class GameIconsPackedPlanksIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
