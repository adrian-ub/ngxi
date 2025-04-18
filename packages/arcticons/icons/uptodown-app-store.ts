import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUptodownAppStoreIcon],svg[arcticons-uptodown-app-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.482 5.496c-3.9 0-6.84 3.1-7 7l-.98 23c-.2 3.9 3.1 7 7 7h23c3.9 0 7.16-3.1 7-7l-.98-23c-.2-3.9-3.1-7-7-7c0 1.1-.086 3.403-.87 4.903c-1 1.9-3 3.1-5.2 3.1h-9c-2.3 0-4.2-1.3-5.2-3.1c-.79-1.4-.77-3.803-.77-4.903m-.382 0h21.04"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.1 27.792l3.3-3.5l3.3 3.5l3.3-3.5l3.3 3.5l3.3-3.5l3.3 3.5l-10 9.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 18.31l2.99 2.99L24 24.293L21.007 21.3z"></svg:path>`,
})
export class ArcticonsUptodownAppStoreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
