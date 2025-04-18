import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDislyteIcon],svg[arcticons-dislyte-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.596 12.465h12.447c2.615 0 4.416 2.083 4.038 4.67l-1.94 13.284c-.379 2.587-2.788 4.67-5.402 4.67H5.894L7.866 20.33h5.836l-1.441 9.522h3.342l1.642-12.231H5.5zm35.569 19.764c-.236 1.565-1.274 2.857-2.857 2.857h-9.77l6.087-16.182h-3.481l2.107-6.437h4.909l-2.531 17.537H42.5zm-14.735-7.45l-2.671 17.217l7.733-20.316h-3.86l4.932-15.676h-5.306L24.134 24.78z"></svg:path>`,
})
export class ArcticonsDislyteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
