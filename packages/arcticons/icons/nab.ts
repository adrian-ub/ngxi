import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNabIcon],svg[arcticons-nab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.99 24l10.09-4.773l-2.559-10.864l10.022 4.913l6.898-8.775L31.849 15.4l11.161-.078L35.99 24l7.02 8.678l-11.161-.078l-2.408 10.899l-6.898-8.775l-10.022 4.913l2.559-10.864zm26.859-8.6L22.27 26.344m15.441-10.982l-9.777 11.143"></svg:path>`,
})
export class ArcticonsNabIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
