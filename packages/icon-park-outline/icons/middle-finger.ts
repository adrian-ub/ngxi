import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMiddleFingerIcon],svg[icon-park-outline-middle-finger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path d="M14.972 26.975Q9.992 27.862 9.99 33c0 5.138 5.153 11 9.8 11h11.89c4.547 0 7.31-3.85 7.31-6.94V24.01a3 3 0 0 0-3-3h-.01A2.99 2.99 0 0 0 32.99 24"></svg:path><svg:path d="M14.972 30.04v-9.027a3.003 3.003 0 0 1 3.002-3.003h.003a3.01 3.01 0 0 1 3.006 3.01v4.003"></svg:path><svg:path stroke-linejoin="round" d="M20.983 24.008V7.015a3.016 3.016 0 0 1 6.031 0v16.993"></svg:path><svg:path stroke-linejoin="round" d="M26.99 23.716v-2.713a3 3 0 0 1 6 0v3"></svg:path></svg:g>`,
})
export class IconParkOutlineMiddleFingerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
