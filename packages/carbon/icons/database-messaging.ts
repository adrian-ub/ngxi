import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDatabaseMessagingIcon],svg[carbon-database-messaging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 32l-1.755-1L24 27h4v-7H16v7h4v2h-4c-1.102 0-2-.897-2-2v-7c0-1.102.898-2 2-2h12c1.103 0 2 .898 2 2v7c0 1.103-.897 2-2 2h-3z"></svg:path><svg:path fill="currentColor" d="M13 2C7.702 2 2 3.252 2 6v18c0 2.403 4.362 3.663 9 3.94v-2c-4.534-.28-6.867-1.464-7-1.94v-3.571c1.707.856 4.306 1.344 7 1.506V19.94c-4.534-.28-6.867-1.465-7-1.94v-3.571C6.128 15.495 9.643 16 13 16c5.298 0 11-1.252 11-4V6c0-2.749-5.702-4-11-4M3.999 6.015C4.15 5.46 7.149 4 13 4c5.798 0 8.795 1.434 8.997 2c-.202.566-3.2 2-8.997 2c-5.85 0-8.85-1.46-9.001-1.985M22 11.987c-.16.557-3.159 2.013-9 2.013c-5.85 0-8.85-1.46-9-2V8.428C6.128 9.495 9.643 10 13 10s6.872-.505 9-1.572z"></svg:path>`,
})
export class CarbonDatabaseMessagingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
