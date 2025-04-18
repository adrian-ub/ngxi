import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsViuIcon],svg[arcticons-viu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.139 21.968v10.161m-4.804-16.258v16.258L4.5 15.871m24.165 0v10.873a5.385 5.385 0 0 0 5.385 5.385h4.065a5.385 5.385 0 0 0 5.385-5.385V15.87m-19.361 2.033v-2.032"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m39.971 21.968l-6.687-3.861v7.722z"></svg:path>`,
})
export class ArcticonsViuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
