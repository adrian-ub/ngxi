import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAddyIoIcon],svg[arcticons-addy-io-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="11.747" height="11.747" x="18.127" y="23.531" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.349" ry="2.349"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.35 43.5h-8.223a8.223 8.223 0 0 1-8.223-8.223V23.531a8.223 8.223 0 0 1 8.223-8.223h11.746a8.223 8.223 0 0 1 8.223 8.223v3.524a8.223 8.223 0 0 1-8.223 8.222h-2.349"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.29 15.812v-2.561a8.75 8.75 0 1 1 17.502 0v2.561"></svg:path>`,
})
export class ArcticonsAddyIoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
