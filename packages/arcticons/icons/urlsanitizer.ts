import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUrlsanitizerIcon],svg[arcticons-urlsanitizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.055 14.212l6.942-6.943c2.679-2.678 7.539-2.162 10.217.517s3.195 7.538.517 10.217L30.448 28.286c-2.679 2.678-7.538 2.162-10.217-.517"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.945 33.789l-6.942 6.942c-2.679 2.678-7.539 2.162-10.217-.517s-3.195-7.538-.517-10.217l10.283-10.283c2.679-2.678 7.539-2.162 10.217.517"></svg:path>`,
})
export class ArcticonsUrlsanitizerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
