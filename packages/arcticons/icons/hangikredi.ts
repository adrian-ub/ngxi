import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHangikrediIcon],svg[arcticons-hangikredi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 28.27c3.238 3.85 6.475 7.701 10.403 10.117c3.927 2.416 8.545 3.398 13.093 2.703s9.026-3.067 13.504-5.44M29.316 6.691l-5.1 26.159"></svg:path><svg:circle cx="36.164" cy="22.887" r="3.744" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="16.61" cy="19.071" r="3.744" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsHangikrediIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
