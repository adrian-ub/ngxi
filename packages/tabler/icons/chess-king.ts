import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChessKingIcon],svg[tabler-chess-king-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 16l-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16zm.5 0a3.5 3.5 0 1 1 3.163-5h.674a3.5 3.5 0 1 1 3.163 5zM9 6h6m-3-3v8"></svg:path>`,
})
export class TablerChessKingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
