import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMtsUrentIcon],svg[arcticons-mts-urent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.893 15.995c0 .83-.675 1.504-1.508 1.504h0a1.506 1.506 0 0 1 0-3.012h0c.833 0 1.508.673 1.508 1.504zm7.245 2.245c0 .83-.675 1.504-1.508 1.504h0a1.506 1.506 0 0 1 0-3.012h0c.833 0 1.508.674 1.508 1.504zm5.095 2.43v9.26a3.575 3.575 0 0 1-3.568 3.583H17.358a3.575 3.575 0 0 1-3.59-3.56v-9.279"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsMtsUrentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
