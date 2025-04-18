import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQq2Icon],svg[arcticons-qq-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.791 45.5a5.839 5.839 0 0 0 0-11.678c-.047 0-.092.013-.14.015a6.842 6.842 0 0 0-13.656-.303A6.074 6.074 0 1 0 24.531 45.5Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.609 34.548A21.503 21.503 0 1 0 23.87 45.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.66 27.51a11.344 11.344 0 1 0-14.163 7.323"></svg:path>`,
})
export class ArcticonsQq2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
