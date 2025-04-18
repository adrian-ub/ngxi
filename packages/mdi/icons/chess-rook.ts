import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChessRookIcon],svg[mdi-chess-rook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20h14v2H5zM17 2v3h-2V2h-2v3h-2V2H9v3H7V2H5v6h2v10h10V8h2V2z"></svg:path>`,
})
export class MdiChessRookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
