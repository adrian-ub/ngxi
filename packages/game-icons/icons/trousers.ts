import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsTrousersIcon],svg[game-icons-trousers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M250.45 19.767c-44.556.187-87.24 7.376-118.562 21c-16.176 147.458-32.792 298.827-46.72 425.75l123.344 24.814l34.157-262.844h20.63l34.25 263.75h.218l129.063-26.28c-15.71-141.714-31.023-283.473-46.724-425.19c-38.697-14.307-85.098-21.17-129.655-21z"></svg:path>`,
})
export class GameIconsTrousersIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
