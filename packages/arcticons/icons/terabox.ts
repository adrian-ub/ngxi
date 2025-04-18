import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTeraboxIcon],svg[arcticons-terabox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.388 11.012c5.289-.285 10.791 2.763 12.617 9.736a8.16 8.16 0 0 1 7.467 8.796c-.323 3.959-3.402 7.462-7.407 7.462H13.26c-11.125 0-13.06-18.263 0-19.52a12.03 12.03 0 0 1 10.127-6.474Zm1.155 25.994V25.767"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.286 30.509l-4.743-4.742l-4.742 4.742"></svg:path>`,
})
export class ArcticonsTeraboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
