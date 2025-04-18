import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVanishIcon],svg[mdi-vanish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 13v-2h5v2zm-1.17-5.24l2.83-2.83l1.41 1.41l-2.83 2.83zM11 16h2v5h-2zm0-13h2v5h-2zM4.93 17.66l2.83-2.83l1.41 1.41l-2.83 2.83zm0-11.32l1.41-1.41l2.83 2.83l-1.41 1.41zM8 13H3v-2h5zm11.07 4.66l-1.41 1.41l-2.83-2.83l1.41-1.41z"></svg:path>`,
})
export class MdiVanishIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
