import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIvacyIcon],svg[arcticons-ivacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.568 11.755C11.348 8.015 16.598 5.5 24 5.5s12.652 2.515 17.432 6.255C42.223 29.297 33.377 39.51 24 42.5C14.623 39.509 5.777 29.297 6.568 11.755"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.012 17.345c-2.337-1.519-4.888-2.483-8.012-2.483s-5.675.964-8.012 2.483c-.482 7.259 2.925 12.864 8.012 14.48c5.087-1.616 8.494-7.221 8.012-14.48m-16.176-.09L6.8 11.893M24 31.865v10.496"></svg:path>`,
})
export class ArcticonsIvacyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
