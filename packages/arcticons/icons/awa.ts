import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAwaIcon],svg[arcticons-awa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.916 19.018l-2.458 9.963L24 19.018l-2.457 9.963l-2.458-9.963m-2.119 6.663h-4.355m-1.079 3.301l3.257-9.963l3.256 9.963m17.344-3.301h-4.355m-1.079 3.301l3.257-9.963l3.256 9.963"></svg:path>`,
})
export class ArcticonsAwaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
