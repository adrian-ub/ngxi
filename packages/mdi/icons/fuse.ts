import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFuseIcon],svg[mdi-fuse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7v10h7V7zm3.16 9v-3.13H9.41L11.91 8v3.14h1.68zM16 2v4H7V2a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1m0 16v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4z"></svg:path>`,
})
export class MdiFuseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
