import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChessKnightIcon],svg[tabler-chess-knight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 16l-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16zM9 3l1 3l-3.491 2.148A1 1 0 0 0 7.033 10H10l-2.073 6h7.961L16 11c0-3-1.09-5.983-4-7Q9.09 2.983 9 3"></svg:path>`,
})
export class TablerChessKnightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
