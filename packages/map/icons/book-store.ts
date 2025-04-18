import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapBookStoreIcon],svg[map-book-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M41 40V6c0-2.2-1.8-4-4-4H13c-2.2 0-4 1.8-4 4v38c0 2.2 1.8 4 4 4h24c1.858 0 4 0 4-2v-1H14c-1.1 0-2-.9-2-2v-3zM14 10c0-.55.45-1 1-1h20c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1H15c-.55 0-1-.45-1-1zm0 8c0-.55.45-1 1-1h20c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1H15c-.55 0-1-.45-1-1z"></svg:path>`,
})
export class MapBookStoreIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
