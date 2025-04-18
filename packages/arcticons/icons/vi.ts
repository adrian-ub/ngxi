import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsViIcon],svg[arcticons-vi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="9.128" height="24.342" x="33.872" y="8.251" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".507"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.018 8.635L18.55 26.507L14.082 8.635a.51.51 0 0 0-.492-.384H5.507a.507.507 0 0 0-.492.63l5.832 23.327a.51.51 0 0 0 .492.384h14.422a.51.51 0 0 0 .492-.384l5.832-23.327a.507.507 0 0 0-.492-.63H23.51a.51.51 0 0 0-.492.384"></svg:path><svg:circle cx="38.436" cy="39.185" r="4.564" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsViIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
