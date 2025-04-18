import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusixmatchIcon],svg[arcticons-musixmatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 31.2l31-24.1c2.4-1.9 6-.2 6 2.9v28c0 3.1-3.5 4.8-6 2.9l-31-24.1"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m42.5 31.2l-31-24.1c-2.4-1.9-6-.2-6 2.9v28c0 3.1 3.5 4.8 6 2.9l31-24.1"></svg:path>`,
})
export class ArcticonsMusixmatchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
