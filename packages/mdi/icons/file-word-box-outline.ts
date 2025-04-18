import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileWordBoxOutlineIcon],svg[mdi-file-word-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 2h14v14H5zm12.9 2l-2.4 10H14l-2-7.5l-2 7.5H8.5L6.1 7h1.7l1.54 7.5L11.3 7h1.4l1.97 7.5L16.2 7z"></svg:path>`,
})
export class MdiFileWordBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
