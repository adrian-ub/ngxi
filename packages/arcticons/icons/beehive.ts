import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBeehiveIcon],svg[arcticons-beehive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.63 24l4.696-8.137h9.397L24.42 24l-4.698 8.137h-9.397zm17.95 10.363l4.695-8.137h9.397l4.698 8.137l-4.698 8.137h-9.397zm0-20.726L28.274 5.5h9.397l4.698 8.137l-4.698 8.137h-9.397z"></svg:path>`,
})
export class ArcticonsBeehiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
