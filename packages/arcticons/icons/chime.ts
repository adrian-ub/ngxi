import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsChimeIcon],svg[arcticons-chime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.423 29.693c-3.628 3.954-10.702 5.505-10.702 5.505a11.337 11.337 0 1 1 .48-22.078a29.2 29.2 0 0 0 10.249 1.732V6.191s-3.6.452-11.428-1.288A19.503 19.503 0 1 0 26.05 43.5c1.333 0 6.566.119 15.328-4.689Z"></svg:path>`,
})
export class ArcticonsChimeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
