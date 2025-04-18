import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRessoIcon],svg[arcticons-resso-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.324 31.275v6.287c0 3.796 4.109 6.168 7.396 4.27L38.21 28.27c3.287-1.898 3.287-6.642 0-8.54L14.72 6.168c-3.287-1.898-7.396.474-7.396 4.27v11.789"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.373 41.239L14.72 27.005c-3.287-1.897-7.396.475-7.396 4.27v6.287c0 3.796 4.109 6.168 7.396 4.27"></svg:path>`,
})
export class ArcticonsRessoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
