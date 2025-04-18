import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsModel3dIcon],svg[arcticons-model3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.1 16.35c.5-13.2 20.7-14.5 22 0c-5.7 2.5-16.8 2-22 0m5.4-8.9l-2.1-3m13.4 3l2.1-3"></svg:path><svg:circle cx="19.1" cy="12.35" r="1.1" fill="none" stroke="currentColor" stroke-miterlimit="10"></svg:circle><svg:circle cx="28.9" cy="12.35" r="1.1" fill="none" stroke="currentColor" stroke-miterlimit="10"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.1 16.35l-.2 18.9a19.49 19.49 0 0 1-21.7 0l-.1-18.9"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.6 37.35V42a1.58 1.58 0 0 0 1.6 1.6H20a1.58 1.58 0 0 0 1.6-1.6v-3.4m5.5-.25v3.5a1.58 1.58 0 0 0 1.6 1.6h1.8a1.58 1.58 0 0 0 1.6-1.6v-5m-8.2-15.8l-5.5 2.8l5.5 2.8l5.7-2.8Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.6 23.85v6.3l-5.6 3l-5.5-3v-6.3m5.4 2.8v6.4m-13.7.4H8a1.11 1.11 0 0 1-1.1-1.1v-14a1.11 1.11 0 0 1 1.1-1.1h2.1a1.11 1.11 0 0 1 1.1 1.1v14a1 1 0 0 1-1 1.1m29.8 0h-2.1a1.11 1.11 0 0 1-1.1-1.1v-14a1.11 1.11 0 0 1 1.1-1.1H40a1.11 1.11 0 0 1 1.1 1.1v14a1.11 1.11 0 0 1-1.1 1.1"></svg:path>`,
})
export class ArcticonsModel3dIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
