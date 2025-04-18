import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsTrampleIcon],svg[game-icons-trample-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 16h15l15 15l15-15h150l15 15l15-15h15v120h-15l-15-15l-15 15h-45v345c0 15-15 15-15 15h-30s-15 0-15-15V136h-45l-15-15l-15 15h-15z"></svg:path>`,
})
export class GameIconsTrampleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
