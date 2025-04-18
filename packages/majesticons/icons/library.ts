import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsLibraryIcon],svg[majesticons-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.514 3.126a1 1 0 0 1 .972 0l9 5A1 1 0 0 1 21 10v9a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2v-9a1 1 0 0 1-.486-1.874zM9 13a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zm4 0a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zm4 0a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsLibraryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
