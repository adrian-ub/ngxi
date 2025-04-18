import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons3aCloudGamesIcon],svg[arcticons-3a-cloud-games-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.844 37.636h2.016l-6.572 4.274l-5.797-4.322L24 6.09l18.509 31.498l-5.797 4.322l-6.572-4.274h2.016L24 24.444z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.64 37.5h-7.394l3.697-6.638z"></svg:path>`,
})
export class Arcticons3aCloudGamesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
