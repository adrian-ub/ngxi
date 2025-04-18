import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsGhostIcon],svg[majesticons-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M6.416 3.788C8.289 2.44 10.506 2 12 2c3.526 0 5.826 1.492 7.212 3.416C20.56 7.289 21 9.506 21 11v9a1 1 0 0 1-1.707.707L18 19.414L16.414 21a2 2 0 0 1-2.828 0L12 19.414L10.414 21a2 2 0 0 1-2.828 0L6 19.414l-1.293 1.293A1 1 0 0 1 3 20v-9c0-3.526 1.492-5.826 3.416-7.212zM7 10a2 2 0 1 1 4 0a2 2 0 0 1-4 0zm6 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsGhostIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
