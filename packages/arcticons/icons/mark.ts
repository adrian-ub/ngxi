import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMarkIcon],svg[arcticons-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.243 18.006l.01-2.514l2.504.01m13 2.504l-.01-2.514l-2.504.01m-13 13.492l.01 2.514l2.504-.01m13-2.505l-.01 2.515l-2.504-.01M24.016 21.5l-.032 4M26 23.516l-4-.032"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 43h23a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4h-23a4 4 0 0 0-4 4v31a4 4 0 0 0 4 4"></svg:path>`,
})
export class ArcticonsMarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
