import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStuffIcon],svg[arcticons-stuff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.458 9.008A3.99 3.99 0 0 1 43.5 12.5v23c0 2.216-1.784 4-4 4h-31c-2.216 0-4-1.784-4-4v-23c0-2.216 1.784-4 4-4v0h15.219"></svg:path><svg:circle cx="32.5" cy="11.5" r="9.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.626 11.962l2.226 2.418l6.078-5.813m6.57 19.036a19.66 19.66 0 0 1-21.477.343a19.41 19.41 0 0 1-8.814-19.421m4.835 30.969A31 31 0 0 1 4.5 25.93"></svg:path>`,
})
export class ArcticonsStuffIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
