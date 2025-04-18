import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGooglePagesIcon],svg[mdi-google-pages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M19 3h-6v5l4-1l-1 4h5V5a2 2 0 0 0-2-2m-2 14l-4-1v5h6a2 2 0 0 0 2-2v-6h-5m-8 0H3v6a2 2 0 0 0 2 2h6v-5l-4 1M3 5v6h5L7 7l4 1V3H5c-1.11 0-2 .89-2 2z" fill="currentColor"></svg:path>`,
})
export class MdiGooglePagesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
