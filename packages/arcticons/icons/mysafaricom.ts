import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMysafaricomIcon],svg[arcticons-mysafaricom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.146 30.94c.735.956 1.656 1.313 2.938 1.313h1.774a2.99 2.99 0 0 0 2.99-2.992v-.013a2.99 2.99 0 0 0-2.99-2.991h-1.957a2.994 2.994 0 0 1-2.992-2.995h0a3 3 0 0 1 2.999-3.002h1.765c1.282 0 2.203.357 2.938 1.314"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.179 21.84c8.99-6.66 8.12-16.303-14.621-3.644c-22.74 12.658-22.791 24.623.131 13.189"></svg:path>`,
})
export class ArcticonsMysafaricomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
