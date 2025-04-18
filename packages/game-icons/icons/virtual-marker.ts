import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsVirtualMarkerIcon],svg[game-icons-virtual-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32L32 224h128l96-80l96 80h128zm0 176l-52 39H32v18h172l52 39l52-39h172v-18H308zM32 288l224 192l224-192H352l-96 80l-96-80z"></svg:path>`,
})
export class GameIconsVirtualMarkerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
