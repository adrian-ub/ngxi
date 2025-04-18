import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWgGesuchtIcon],svg[arcticons-wg-gesucht-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="37.666" cy="31.887" r="4.625" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.783 42.173l3.53-6.33M5.5 15.694l27.236-9.867l9.764 7.811"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.25 13.844v5.344l4.111 2.878v-5.344Zm-5.86 19.238a3.83 3.83 0 0 0-3.954-3.813a3.98 3.98 0 0 0-3.53 3.954v3.53a3.797 3.797 0 0 0 3.812 3.814h0a3.797 3.797 0 0 0 3.812-3.813h-3.813M6.014 29.26L8.84 40.567l2.826-11.305l2.827 11.305l2.827-11.305"></svg:path>`,
})
export class ArcticonsWgGesuchtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
