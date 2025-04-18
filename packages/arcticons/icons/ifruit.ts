import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIfruitIcon],svg[arcticons-ifruit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 24.082a18.5 18.5 0 0 0 37 0Zm20.063 0a8.381 8.381 0 0 0-16.762 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.2 24.082a8.382 8.382 0 0 0-15.207-4.866m-7.908-3.442c.63-4.775 12.333-13.82 21.02-8.966v2.045s-9.547.815-14.418 8.91"></svg:path>`,
})
export class ArcticonsIfruitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
