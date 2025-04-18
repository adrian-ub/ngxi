import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHue2Icon],svg[arcticons-hue2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.41 25.61v-4.7m-8.87 7.19A4.42 4.42 0 0 0 24 32.51h0a4.42 4.42 0 0 0 4.44-4.38v0m-8.87-7.19v4.7m8.87 2.52v4.38M4.5 28.1v4.42m0-17v10.09m8.85 2.49v4.42m-8.85-7a4.36 4.36 0 0 1 4.42-4.26h0a4.36 4.36 0 0 1 4.43 4.26v.12m29.48 4.72a4.28 4.28 0 0 1-3.76 2.18h0a4.42 4.42 0 0 1-4.44-4.37V25.3a4.41 4.41 0 0 1 4.44-4.36h0a4.41 4.41 0 0 1 4.43 4.36v1.53H31.91"></svg:path>`,
})
export class ArcticonsHue2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
