import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAlltransIcon],svg[arcticons-alltrans-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.5 43.5c2.2 0 4-1.8 4-4v-31c0-2.2-1.8-4-4-4h-23c-2.2 0-4 1.8-4 4v27.2a7.8 7.8 0 0 0 7.8 7.8z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35 33.5L30 18l-5.3 15.5m1.8-5.2h6.8M13 18.7h13.6m-6.8-4.2c0 7.6-.2 9.1-6.1 15.2m10.2-2.9c-1.5-1.5-3.8-4.9-4.1-7.8"></svg:path>`,
})
export class ArcticonsAlltransIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
