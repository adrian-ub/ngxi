import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsElstersecureIcon],svg[arcticons-elstersecure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="arcticonsElstersecure0" fill="none" stroke="currentColor" d="M14.964 20.872L24 23.799v.018"></svg:path><svg:path id="arcticonsElstersecure1" fill="none" stroke="currentColor" d="M18.421 31.5L24 23.817v-.018m5.579 7.701L24 23.817v-.018"></svg:path></svg:defs><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5c9.043-3.117 15.489-10.363 16.5-19.589c.28-4.005.257-8.025-.071-12.027a2.54 2.54 0 0 0-2.468-2.366c-4.091-.126-8.846-.808-12.52-4.427a2.05 2.05 0 0 0-2.881 0c-3.675 3.619-8.43 4.301-12.52 4.427a2.54 2.54 0 0 0-2.468 2.366A79.4 79.4 0 0 0 7.5 23.911C8.512 33.137 14.957 40.383 24 43.5m0-29.176v9.493"></svg:path><svg:use href="#arcticonsElstersecure0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.421 31.5L24 23.817v-.018"></svg:path><svg:use href="#arcticonsElstersecure0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:use href="#arcticonsElstersecure1" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:use href="#arcticonsElstersecure1" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.036 20.872L24 23.799v.018"></svg:path>`,
})
export class ArcticonsElstersecureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
