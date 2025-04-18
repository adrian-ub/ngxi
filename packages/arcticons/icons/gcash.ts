import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGcashIcon],svg[arcticons-gcash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.824 33.23a16.12 16.12 0 0 0-.01-18.475m-1.806-2.149a16.114 16.114 0 1 0 0 22.788"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.461 16.923A9.18 9.18 0 1 0 29.794 24h-8.066m17.648 13.109a22.9 22.9 0 0 0-.015-26.24"></svg:path>`,
})
export class ArcticonsGcashIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
