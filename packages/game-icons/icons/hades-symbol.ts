import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsHadesSymbolIcon],svg[game-icons-hades-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 16L112 272l72.8 53l55-37.1L192 256zm32 0l48 240l-144 96l-64 48l144 96l144-96l-64-48l-8.2-5.4l-56.5 41.2L288 400l-32 32l-32-32l176-128z"></svg:path>`,
})
export class GameIconsHadesSymbolIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
