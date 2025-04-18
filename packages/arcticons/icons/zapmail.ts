import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZapmailIcon],svg[arcticons-zapmail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 40.302V14.639a2.74 2.74 0 0 1 2.742-2.742h19.095c.965 0 1.513 1.104.93 1.873L7.596 41.007c-.676.89-2.097.413-2.097-.705M42.5 7.698v25.663a2.74 2.74 0 0 1-2.742 2.742H20.663a1.167 1.167 0 0 1-.93-1.873l20.67-27.237c.676-.89 2.097-.413 2.097.705"></svg:path>`,
})
export class ArcticonsZapmailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
