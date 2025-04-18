import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPopconsIcon],svg[arcticons-popcons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="16.5" cy="21.716" r="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.5" cy="21.716" r="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.58 27.636c-1.655 2.691-4.374 1.598-5.58.168c-1.206 1.43-3.925 2.523-5.58-.168"></svg:path><svg:circle cx="24" cy="24" r="15.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsPopconsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
