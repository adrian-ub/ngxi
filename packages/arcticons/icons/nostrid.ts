import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNostridIcon],svg[arcticons-nostrid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.487 26.445v-4.898l26.777-15.45V32.14l-14.112-8.148"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m39.513 39.436l-4.273 2.468l-26.754-15.46l22.555-13.021v16.28"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.264 6.096l4.223 2.439l.027 30.9l-22.555-13.021l14.083-8.13"></svg:path>`,
})
export class ArcticonsNostridIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
