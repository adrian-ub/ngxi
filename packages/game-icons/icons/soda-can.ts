import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsSodaCanIcon],svg[game-icons-soda-can-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m171 42l-20 48h210l-20-48zm-19.45 65.55v296.9h208.9v-296.9zM151 422l20 48h170l20-48z"></svg:path>`,
})
export class GameIconsSodaCanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
