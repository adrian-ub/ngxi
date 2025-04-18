import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeMoveUpIcon],svg[icomoon-free-move-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8v6h1V8h2.5l-3-3l-3 3zM1 3h1.5v1H1zm2 0h1.5v1H3zm2 0h1v1.5H5zM1 6.5h1V8H1zm1.5.5H4v1H2.5zm2 0H6v1H4.5zM1 4.5h1V6H1zM5 5h1v1.5H5zm0 6v3H2v-3zm1-1H1v5h5z"></svg:path>`,
})
export class IcomoonFreeMoveUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
