import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAviasalesIcon],svg[arcticons-aviasales-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.34 31.4a5 5 0 0 1-5-5v-4.78a5 5 0 0 1 5-5h1.16V9.5a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4v7.12h1.16a5 5 0 0 1 5 5v4.78a5 5 0 0 1-5 5H5.5v7.1a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-7.1z"></svg:path><svg:rect width="18.05" height="23.92" x="14.99" y="13.07" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6" ry="6"></svg:rect><svg:rect width="12.79" height="16.04" x="17.62" y="15.7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3" ry="3"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.57 27v1.27a1.5 1.5 0 0 0 1.5 1.5h1.27"></svg:path>`,
})
export class ArcticonsAviasalesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
