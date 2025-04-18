import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOmnissaHorizonIcon],svg[arcticons-omnissa-horizon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.786 37.984c-4.562 0-8.676-2.75-10.424-6.969c-1.749-4.218-.788-9.076 2.434-12.31s8.073-4.206 12.29-2.465m16.46 6.497a7.91 7.91 0 0 1-2.947 15.247m.001 0H16.785m4.302-21.744l16.459 6.497"></svg:path><svg:ellipse cx="24.578" cy="21.314" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="11.286" ry="11.299"></svg:ellipse>`,
})
export class ArcticonsOmnissaHorizonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
