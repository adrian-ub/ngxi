import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChessRookIcon],svg[tabler-chess-rook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 16l-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16zm0 0l1-9h6l1 9M6 4l.5 3h11l.5-3m-8 0v3m4-3v3"></svg:path>`,
})
export class TablerChessRookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
