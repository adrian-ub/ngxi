import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArtboardIcon],svg[mdi-artboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9v6H7V9zm2-6h-2v3h2zM7 3H5v3h2zm16 4h-3v2h3zm-4 0H5v10h14zM4 7H1v2h3zm19 8h-3v2h3zM4 15H1v2h3zm15 3h-2v3h2zM7 18H5v3h2z"></svg:path>`,
})
export class MdiArtboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
