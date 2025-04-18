import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIzomeParentIcon],svg[arcticons-izome-parent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.57 32.5H37.5a5 5 0 0 1 0 10H20.618"></svg:path><svg:circle cx="10.5" cy="10.5" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 10.5V24a5 5 0 0 1-10 0v-1.429M5.5 37.5V24a5 5 0 0 1 10 0v1.43m9.93-9.929H24a5 5 0 0 1 0-10h3.383"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.74 11.191a3.333 3.333 0 0 0-2.358-5.69H37.5a5 5 0 0 1 3.536 8.535L18.26 36.81a3.333 3.333 0 0 0 2.357 5.69H10.5a5 5 0 0 1-3.536-8.535z"></svg:path>`,
})
export class ArcticonsIzomeParentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
