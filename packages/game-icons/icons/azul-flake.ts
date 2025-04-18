import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsAzulFlakeIcon],svg[game-icons-azul-flake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 16v99.3l119 118.9V120.1zm256 0L265 120.1v114.1l119-119zM16 128l104 119h114.2L115.3 128zm380.8 0l-119 119h114.1l104-119zM120 265L16 384h99.2l119-119zm157.8 0l119 119h99.1l-104-119zM247 277.8l-119 119V496l119-104.1zm18 0v114.1L384 496v-99.2z"></svg:path>`,
})
export class GameIconsAzulFlakeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
