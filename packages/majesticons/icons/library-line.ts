import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsLibraryLineIcon],svg[majesticons-library-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 9v11M4 9h16M4 9H3l9-5l9 5h-1M4 20h16M4 20H3m17 0V9m0 11h1M8 13v3m4 0v-3m4 0v3"></svg:path>`,
})
export class MajesticonsLibraryLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
