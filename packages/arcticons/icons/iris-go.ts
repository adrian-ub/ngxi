import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIrisGoIcon],svg[arcticons-iris-go-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.575 24.981c0-1.648 1.319-2.983 2.945-2.983m-2.945 0v7.905"></svg:path><svg:circle cx="15.229" cy="18.343" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.884 21.998v7.905"></svg:path><svg:circle cx="27.556" cy="18.343" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.21 21.998v7.905m4.876-.666c.538.457 1.118.667 2.422.667h.661c1.076 0 1.947-.885 1.947-1.976s-.871-1.977-1.947-1.977h-1.321c-1.076 0-1.947-.885-1.947-1.976s.871-1.977 1.947-1.977h.66c1.304 0 1.885.21 2.423.667"></svg:path>`,
})
export class ArcticonsIrisGoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
