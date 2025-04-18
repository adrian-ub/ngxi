import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZahlerIcon],svg[arcticons-zahler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 29.5v-20a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4v20M19 16.723L24 14m0 0v20m9.5 3h7m-33 0h7M11 33.5v7"></svg:path><svg:rect width="15" height="15" x="3.5" y="29.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3" ry="3"></svg:rect><svg:rect width="15" height="15" x="29.5" y="29.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3" ry="3"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.5 42.5h-11"></svg:path>`,
})
export class ArcticonsZahlerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
