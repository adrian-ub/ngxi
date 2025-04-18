import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNeoStoreIcon],svg[arcticons-neo-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.144 30.894A9.75 9.75 0 1 1 14.25 14.25c5.385 0 7.85 5.287 9.75 9.75c2.11 4.954 4.365 9.75 9.75 9.75a9.75 9.75 0 1 0-6.894-16.644"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.696 28.804a5 5 0 1 0-3.946-.023M7.75 24h13m-11-4h9m-9 8h9m18.903-12.935l1.562-1.738m-9.368 1.738l-1.562-1.738"></svg:path>`,
})
export class ArcticonsNeoStoreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
