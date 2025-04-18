import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDigidIcon],svg[arcticons-digid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.1 35.3v-9.4h2.1c2.3 0 4.1 1.8 4.1 4.1h0v1.2c0 2.3-1.8 4.1-4.1 4.1zm21.5 0v-9.4h2.1c2.3 0 4.1 1.8 4.1 4.1h0v1.2c0 2.3-1.8 4.1-4.1 4.1zM26.3 29v7.1c0 1.3-1.1 2.4-2.4 2.4h0c-.6 0-1.2-.2-1.7-.7"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.9 35.3c-1.3 0-2.4-1.1-2.4-2.4v-1.5c0-1.3 1.1-2.4 2.4-2.4h0c1.3 0 2.4 1.1 2.4 2.4v1.5c0 1.3-1.1 2.4-2.4 2.4"></svg:path><svg:circle cx="19" cy="26.1" r=".8" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19 29v6.3"></svg:path><svg:circle cx="29" cy="26.1" r=".8" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29 29v6.3m9.5-29.8h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"></svg:path>`,
})
export class ArcticonsDigidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
