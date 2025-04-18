import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUnraidIcon],svg[arcticons-unraid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 19v10m4.626-2.5v5M24 19v10m-9.248 2v4m4.626-8.5v5M42.5 29V19m-9.248-2v-4m-4.626 8.5v-5m9.252 5v-5"></svg:path>`,
})
export class ArcticonsUnraidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
