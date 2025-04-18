import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAsteroidossyncIcon],svg[arcticons-asteroidossync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 3.5L44.5 24L24 44.5L3.5 24Zm-3.69 11.89l-4.1 4.1l4.1 4.1l4.1-4.1Zm4.1 4.1l4.1 4.1l-9 9l4.1 4.1l9-9l3.28-3.28l.82-.82l-8.2-8.2z"></svg:path>`,
})
export class ArcticonsAsteroidossyncIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
