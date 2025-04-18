import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAppclonerIcon],svg[arcticons-appcloner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 33.91H26a8.36 8.36 0 0 0 7.88-7.85v-12m0-2V5.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 14.09H22a8.36 8.36 0 0 0-7.88 7.85v12m0 2v6.56m2.48-25.9l14.76 14.76M14.09 24L24 33.91m0-19.82L33.91 24"></svg:path>`,
})
export class ArcticonsAppclonerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
